import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditLocationAltIcon from "@mui/icons-material/EditLocationAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import ShareIcon from "@mui/icons-material/Share";
import "./Dream.css";
import "./homeComponents/Feed.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import Header from "./homeComponents/Header";
import Sidebar from "./homeComponents/Sidebar";
import MyMap from "./homeComponents/MyMap";

function Dreams(props) {
  const user = useSelector(selectUser);
  const { dreams } = props;
  console.log(dreams);

  const myDreams = dreams.filter((dream) => {
    return dream.dreamer._id == user.userId;
  });
  return (
    <div className="dreams_body">
      <Header />
      {!user ? (
        <signIn />
      ) : (
        <>
          <div className="dream_sidebar">
            <Sidebar />
            <div className="feed">
              <h1>Your Dream Space</h1>
              <div className="dreams_content">
                <div>
                  <div>
                    {myDreams.map((dream) => {
                      return (
                        <div key={dream._id}>
                          <div className="dream_box">
                            <div>
                              <img alt="dreamImg" src={dream.image} />
                              <div className="dream_desc">
                                <h3>{dream.title}</h3>
                                <p>{dream.description}</p>
                                <h3>Item list:</h3>
                                <div className="itemsList">
                                  {dream.items.map((item) => {
                                    return (
                                      <div>
                                        <h5>{item.name}</h5>
                                        <p>{item.description}</p>
                                      </div>
                                    );
                                  })}
                                </div>
                                <p>
                                  <b>Supports:</b> 8
                                </p>
                              </div>
                              <div className="btn_control">
                                <Link
                                  to="/dreams/new"
                                  style={{
                                    margin: "8px",
                                    color: "rgb(192, 101, 45)",
                                  }}
                                >
                                  <AddCircleIcon />
                                </Link>
                                <Link
                                  to={`/dreams/${dream._id}/edit`}
                                  style={{
                                    margin: "8px",
                                    color: "rgb(192, 101, 45)",
                                  }}
                                >
                                  <EditLocationAltIcon />
                                </Link>
                                <Link
                                  to={`/dreams/${dream._id}/delete`}
                                  style={{
                                    margin: "8px",
                                    color: "rgb(192, 101, 45)",
                                  }}
                                >
                                  <DeleteIcon />
                                </Link>
                                <Link
                                  to={`/dreams/${dream._id}/send`}
                                  style={{
                                    margin: "8px",
                                    color: "rgb(192, 101, 45)",
                                  }}
                                >
                                  <ShareIcon />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div>
                    <h2 style={{ textAlign: "center" }}>
                      Check out the dreamers near you
                    </h2>
                    <MyMap />
                  </div>
                </div>
                <div className="allDreams">
                  {dreams.map((elem) => {
                    return (
                      <div key={elem._id} className="dream_list">
                        <Link
                          to={`/dreams/${elem._id}`}
                          style={{
                            paddingLeft: "13px",
                            textDecoration: "none",
                            color: "rgb(97, 149, 112)",
                          }}
                        >
                          <h4
                            style={{
                              border: "1px solid rgba(192, 101, 45)",
                              padding: "5px",
                              borderRadius: "7px",
                              width: "350px",
                            }}
                          >
                            {elem.title}
                          </h4>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Dreams;
