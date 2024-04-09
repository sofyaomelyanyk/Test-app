import { ArrowRightOutlined } from "@ant-design/icons";
import useTask from "../../hooks/useTask";
import s from "./styles.module.scss";
import { Tooltip } from "antd";
import { memo } from "react";

const LinksUnderInput = memo(() => {
  const {
    userRepoUrl,
    userRepoName,
    userProfileUrl,
    userProfileName,
    errorMessage,
  } = useTask();
  return (
    <>
      {userRepoUrl && userProfileUrl && !errorMessage && (
        <div className={s.container}>
          <Tooltip placement="topLeft" title={"Go to user profile"}>
            <a
              href={userProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={s.link}
            >
              {userProfileName}
            </a>
          </Tooltip>
          <ArrowRightOutlined style={{ fontSize: 10 }} />
          <Tooltip placement="topLeft" title={"Go to user repo"}>
            <a
              href={userRepoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={s.link}
            >
              {userRepoName}
            </a>
          </Tooltip>
        </div>
      )}
    </>
  );
});
export default LinksUnderInput;
