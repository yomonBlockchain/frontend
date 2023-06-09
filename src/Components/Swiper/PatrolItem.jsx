import React, { useEffect } from "react";
import CreativeBg01 from "assets/images/creative-bg-01.jpg";
import Creative03 from "assets/images/creative-03.jpg";
import { GroupAPI } from "API";

const PatrolItem = (props) => {
  /* Router */
  /* State */
  const {
    groupId,
    GroupName,
    isPart,
    Status,
    guardId,
    setGroupInfo = () => {},
  } = props;
  /* Hooks */
  useEffect(() => {}, [Status]);

  /* Functions */
  const countInfo = {
    target_group_id: groupId,
  };
  const handleStatusChange = async () => {
    await GroupAPI.countGroup(countInfo);
    // const response = await GroupAPI.getGroupByGuard(guardId);
    await setGroupInfo();
  };
  /* Render */
  return (
    <div
      key={groupId}
      className="text-center shadow-sm"
      data-aos-anchor="[data-aos-id-cards]"
    >
      <img
        className="w-full h-16 object-cover opacity-60"
        src={CreativeBg01}
        width={258}
        height={64}
        alt="img"
      />
      <div className="bg-white px-4 pb-6">
        <div className="relative inline-flex -mt-8 mb-3">
          <img
            className="inline-flex rounded-full"
            src={Creative03}
            width={64}
            height={64}
            alt="img"
          />

          {isPart && (
            <svg
              className="absolute top-0 right-0"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="fill-blue-500"
                d="M20 10.469c0 .699-.168 1.347-.504 1.941a3.594 3.594 0 0 1-1.351 1.383c.015.105.023.27.023.492 0 1.059-.355 1.957-1.059 2.7-.707.745-1.558 1.117-2.554 1.117-.446 0-.871-.082-1.274-.247a3.874 3.874 0 0 1-1.351 1.551A3.359 3.359 0 0 1 10 20a3.39 3.39 0 0 1-1.941-.582 3.787 3.787 0 0 1-1.34-1.563 3.33 3.33 0 0 1-1.274.247c-.996 0-1.851-.372-2.566-1.118-.715-.742-1.07-1.644-1.07-2.699 0-.117.015-.281.043-.492A3.621 3.621 0 0 1 .5 12.41 3.916 3.916 0 0 1 0 10.47c0-.742.188-1.426.559-2.043a3.443 3.443 0 0 1 1.496-1.371 3.863 3.863 0 0 1-.246-1.34c0-1.055.355-1.957 1.07-2.7.715-.742 1.57-1.117 2.566-1.117.446 0 .871.082 1.274.247A3.874 3.874 0 0 1 8.07.594 3.388 3.388 0 0 1 10 0c.7 0 1.344.2 1.93.59.586.394 1.039.91 1.351 1.55a3.33 3.33 0 0 1 1.274-.245c.996 0 1.847.37 2.554 1.117.707.746 1.059 1.644 1.059 2.699 0 .492-.074.937-.223 1.34a3.443 3.443 0 0 1 1.496 1.37c.372.622.559 1.306.559 2.048Z"
              />
              <path
                className="fill-white"
                d="M14.8 8.4 13.4 7l-4 4-2-2L6 10.4l3.4 3.4z"
              />
            </svg>
          )}
        </div>
        <div className="mb-5">
          <div className="inline-block font-cabinet-grotesk font-bold text-xl decoration-blue-500 decoration-2 underline-offset-2 hover:underline">
            {GroupName}
          </div>
          <div className="text-sm font-medium text-gray-500"></div>
        </div>
        <div>
          {!Status ? (
            <button
              className={`btn-sm text-white bg-green-800 hover:bg-green-900 shadow-sm`}
              onClick={handleStatusChange}
            >
              Patrol Done
            </button>
          ) : (
            <button
              className={`btn-sm text-white bg-blue-800 hover:bg-blue-900 shadow-sm`}
            >
              Patrol Finished
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PatrolItem;
