import Members from '../members';

const MemberList = ({ searchValue, searchValueChange, selectedMember }) => {
    return (
        <div class="col left">
            <div className="search-box">
                <input
                    value={searchValue}
                    type="text"
                    className="inp-sch"
                    placeholder="검색어를 입력하세요."
                    onChange={(e) => searchValueChange(e.target.value)}
                />
            </div>
            <div class="contact-list">
                <ul>
                    {Members.filter((list) => list.name.includes(searchValue) || !searchValue).map((list) => (
                        <li key={list.id}>
                            <button type="button" onClick={() => selectedMember(list)}>{list.name}</button>
                        </li>
                    ))}
                </ul>
            </div >
        </div>
    );
};

export default MemberList;