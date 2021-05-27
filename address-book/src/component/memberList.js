const MemberList = ({ selectedMember, searchMemberList }) => {
    return (
        <div class="contact-list">
            <ul>
                {searchMemberList.map((list) => (
                    <li key={list.id}>
                        <button type="button" onClick={() => selectedMember(list)}>{list.name}</button>
                    </li>
                ))}
            </ul>
        </div >
    );
};

export default MemberList;