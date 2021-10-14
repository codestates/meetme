import React from "react";
import { Link } from "react-router-dom";

function PersonInfoCard ({ person }) { 
  // console.log('PersonInfoCard - person', person)

  return (
  <div class="usersinfo-wrap">
    <div class="usersinfo-img-container">
      <img src={pserson.profilepath} alt={pserson.username} />
    </div>
    <div class="user-name">name&nbsp;: {person.username}</div>
    <div class="user-likes">
      {/* # person tag는 배열로 리턴이 되는가? */}
      like&nbsp;:&nbsp;
      {person.tag.map((t) =>
      // UserListByTag 컴포넌트로 이동한다
      <Link
        to={{
          pathname: `/person/profile/${t}`,
          state: {
            tagName: t
          }
        }}
        class="tag"
      >
        {t}
      </Link>
      )}
      &nbsp;
    </div>
  </div>
  )
}

export default PersonInfoCard;