const MemberSearch = ({ searchValue, searchValueChange }) => {
    return (
        <div className="search-box">
            <input
                value={searchValue}
                type="text"
                className="inp-sch"
                placeholder="검색어를 입력하세요."
                onChange={(e) => searchValueChange(e.target.value)}
            />
        </div>
    );
};

export default MemberSearch;
