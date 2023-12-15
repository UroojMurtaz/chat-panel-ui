

const Search = () => {
  const user = false;
  return (
    <div className="">
      <div className="p-4">
        <input
          className=" bg-slate-100 w-full px-4 py-2 bg-transparent border border-white text-slate-700 outline-none placeholder-lightgray focus:placeholder-gray-300 rounded-lg"
          type="text"
          placeholder="Find a user"
          //   onKeyDown={handleKey}
          //   onChange={(e) => setUsername(e.target.value)}
          //   value={username}
        />
      </div>
      {/* {err && <span>User not found!</span>} */}
      {user && (
        <div
          className="userChat"
          // onClick={handleSelect}
        >
          <img src="https://source.unsplash.com/100x100/?avatar" alt="" />
          <div className="userChatInfo">
            <span>Urooj Murtaza</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
