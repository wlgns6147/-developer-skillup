const MemberInfo = ({ selectedList }) => {
    return (
        <div class="col right">
            <div class="details">
                {selectedList ? (
                    <ul class="info">
                        <li>이름: {selectedList.name}</li>
                        <li>부서: {selectedList.dept}</li>
                        <li>휴대폰: {selectedList.phone}</li>
                        <li>메일: {selectedList.mail}</li>
                    </ul>
                ) : (
                    <p class="emptyset">정보가 없습니다.</p>
                )}
            </div>
        </div>
    );
};

export default MemberInfo;