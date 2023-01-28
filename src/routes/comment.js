import '../App.css';

function Comment(){
    const imgLink = ""
    return <div class="ui comments">
      <h3 class="ui dividing header">Comments</h3>
      <div class="comment">
        <a class="avatar" href="#!">
          <img src={imgLink} alt = ""></img>
        </a>
        <div class="content">
          <a class="author" href="#!">Matt</a>
          <div class="metadata">
            <span class="date">Today at 5:42PM</span>
          </div>
          <div class="text">
            How artistic!
          </div>
          <div class="actions">
            <a class="reply" href="#!">Reply</a>
          </div>
        </div>
      </div>
      <div class="comment">
        <a class="avatar" href="#!">
          <img src={imgLink} alt = ""></img>
        </a>
        <div class="content">
          <a class="author" href="#!">Elliot Fu</a>
          <div class="metadata">
            <span class="date">Yesterday at 12:30AM</span>
          </div>
          <div class="text">
            <p>This has been very useful for my research. Thanks as well!</p>
          </div>
          <div class="actions">
            <a class="reply" href="#!">Reply</a>
          </div>
        </div>
        <div class="comments">
          <div class="comment">
            <a class="avatar" href="#!">
              <img src={imgLink} alt = ""></img>
            </a>
            <div class="content">
              <a class="author" href="#!">Jenny Hess</a>
              <div class="metadata">
                <span class="date">Just now</span>
              </div>
              <div class="text">
                Elliot you are always so right :)
              </div>
              <div class="actions">
                <a class="reply" href="#!">Reply</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="comment">
        <a class="avatar" href="#!">
          <img src={imgLink} alt = ""></img>
        </a>
        <div class="content">
          <a class="author" href="#!">Joe Henderson</a>
          <div class="metadata">
            <span class="date">5 days ago</span>
          </div>
          <div class="text">
            Dude, this is awesome. Thanks so much
          </div>
          <div class="actions">
            <a class="reply" href="#!">Reply</a>
          </div>
        </div>
      </div>
      <form class="ui reply form">
        <div class="field">
          <textarea></textarea>
        </div>
        <div class="ui blue labeled submit icon button">
          <i class="icon edit"></i> Add Reply
        </div>
      </form>
    </div>
    }
export default Comment