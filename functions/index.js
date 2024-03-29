const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.modifySearchdb = functions.region("asia-northeast3").database.ref("/").onWrite((change, context) => {
    const db = admin.database();
    const afterData = change.after.val(); // Data after the change
    const equipment = afterData["equipment"];
    const searchdb_origin = afterData["searchdb"]
    // Compare the before and after data to determine what changed
    const searchdb = {};
    let floor_data;
    let lab_data;
    let container_data;
    let closet_data;
    let item_name;
    let closet_num;
    let item_data;
    for (let floor = 1; floor <=4; floor++) {
        floor_data = equipment[floor];
        for (const lab_name in floor_data) {
            if (Object.prototype.hasOwnProperty.call(floor_data, lab_name)) {
                try {
                    lab_data = floor_data[lab_name];
                    if (typeof lab_data["detail"] !== "undefined" && typeof lab_data["detail"]["closet_container"] !== "undefined") {
                        lab_data = lab_data["detail"];
                        closet_num = lab_data["startingNo"]-1;
                        lab_data = lab_data["closet_container"];
                        for (let container_num = 1; container_num < lab_data.length; container_num++) {
                            if (typeof lab_data[container_num]["data"] !== "undefined") {
                                container_data = lab_data[container_num]["data"];
                                for (let closet_order = 0; closet_order < container_data.length; closet_order++) {
                                    closet_data = container_data[closet_order]["data"];
                                    closet_num += 1;
                                    for (let item_num = 0; item_num < closet_data.length; item_num++) {
                                        item_name = closet_data[item_num]["name"];
                                        if (typeof item_name !== "undefined") {
                                            item_data = {
                                                "floor": floor,
                                                "lab_name": lab_name,
                                                "container_num(i)": container_num,
                                                "closet_order_in_container(j)": closet_order,
                                                "item_num": item_num,
                                                "closet_num": closet_num,
                                            }
                                            if (typeof searchdb[item_name] === "undefined") {
                                                searchdb[item_name] = [item_data];
                                                if (typeof searchdb_origin[item_name]["description"] !== "undefined") {
                                                    searchdb[item_name]["description"] = searchdb_origin[item_name]["description"];
                                                    functions.logger.log("item data:", item_data);
                                                }
                                            } else {
                                                searchdb[item_name].push(item_data);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                } catch (error) {
                    functions.logger.log("error", error);
                }
            }
        }
    }
    // Your code to modify the database goes here
    return db.ref("/searchdb").set(searchdb); // Always return null or a Promise
});
