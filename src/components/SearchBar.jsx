import "../styles/searchbar.css";

const SearchBar = ({
  useCloseBtn,
  handleCloseBtnClick,
  handleSearchConversation,
}) => {
  // const [showModal, setShowModal] = useState(false);
  const handleSearchInputChange = (e) => {
    handleSearchConversation(e.target.value);
    // setShowModal(true);
  };

  // const handleModalClose = (e) => {
  //   e.preventDefault();
  //   setShowModal(false);
  // };
  return (
    <div className="search-container">
      <img id="search" src="magnifying-glass.png" alt="" />
      <input type="text" onChange={handleSearchInputChange} />
      {useCloseBtn && (
        <img id="close" src="close.png" alt="" onClick={handleCloseBtnClick} />
      )}
      {/* <dialog open={showModal}>
        <div>
          <p>Hello there</p>
          <button onClick={handleModalClose}>Close</button>
        </div>
      </dialog> */}
    </div>
  );
};

export default SearchBar;
