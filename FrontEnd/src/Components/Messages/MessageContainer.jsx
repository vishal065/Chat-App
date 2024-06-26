import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useZustandStore } from "../../Zustand/useZustand";
import { useAuthContext } from "../../Context/AuthContext";

function MessageContainer() {
  const { selectedConversation } = useZustandStore();

  return (
    <div className="md:min-w-[450px] flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* header */}
          <div className="flex bg-slate-500 px-4 py-2 mb-2 gap-1">
            <span className="label-text mt-0.5 ">To:</span>
            <span className="text-gray-800 font-bold">
              {selectedConversation.fullname}
            </span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
}
const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p> Welcome {authUser.fullName}</p>
        <p> Select the Chat to start Messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};

export default MessageContainer;
