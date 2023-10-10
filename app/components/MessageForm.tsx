"use client";

import { createMessageAction } from "@/_actions";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export const MessageForm = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [isOK, setIsOK] = useState(true);
  const [isSubmit, setIsSubmit] = useState(false);

  const submitMessage = async () => {
    if (!name || !title || !message) {
      setIsOK(false);
      setIsSubmit(false);
      return;
    }
    await createMessageAction({ name, title, message, path: "/" });
    setIsOK(true);
    setIsSubmit(true);
    setName("");
    setTitle("");
    setMessage("");
  };

  return (
    <div className="my-10">
      <div className="flex mb-2">
        <div className="bg-rose-900 mr-2 py-1 px-2">
          <span>이름</span>
        </div>
        <input
          className="bg-gray-900 sm:min-w-[344px] px-2"
          maxLength={80}
          placeholder="80자 이하"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="flex mb-2">
        <div className="bg-rose-900 mr-2 py-1 px-2">
          <span>제목</span>
        </div>
        <input
          className="bg-gray-900 sm:min-w-[344px] px-2"
          maxLength={80}
          placeholder="80자 이하"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <textarea
        className="bg-gray-900 min-w-[292px] sm:min-w-[400px] min-h-[200px] p-2"
        placeholder="메세지를 입력해주세요"
        maxLength={1000}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <div className="flex justify-end">
        {!isOK && (
          <span className="flex items-center mx-5 text-rose-700">
            제출에 실패했습니다
          </span>
        )}
        {isSubmit && (
          <div className="flex items-center mr-5">
            <FontAwesomeIcon
              className="text-2xl text-green-700"
              icon={faCheck}
            />
          </div>
        )}
        <button
          className="border-2 p-2 border-gray-700 text-rose-700"
          onClick={submitMessage}
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
};
