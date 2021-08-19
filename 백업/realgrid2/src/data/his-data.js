import { ValueType } from "realgrid";

//첫행 header 에 대한 내용
export const fields = [
    {
        fieldName: "State",         // 필수!!
        dataType: ValueType.TEXT,   // 없어도 돌아감
    },
    {
        fieldName: "Time",
        dataType: ValueType.TEXT,
    },
    {
        fieldName: "Name",
        dataType: ValueType.TEXT,
    },
    {
        fieldName: "RegiNumber",
        dataType: ValueType.NUMBER,
    },
    {
        fieldName: "Sex",
        dataType: ValueType.TEXT,
    },
    {
        fieldName: "Age",
        dataType: ValueType.NUMBER,
    },
    {
        fieldName: "Call",
        dataType: ValueType.iconMap,
    },
];

//그 아래 실제 컬럼들에 대한 명세
export const columns = [
    {
        name: "State",
        fieldName: "State",
        type: "data",
        width: "150",
        styles: {
            textAlignment: "center",
        },
        header: {
            text: "상태",
            showTooltip: false,
        },
    },
    {
        name: "Time",
        fieldName: "Time",
        type: "data",
        width: "150",
        styles: {
            textAlignment: "center",
        },
        header: {
            text: "시간",
            showTooltip: false,
        },
    },
    {
        name: "Name",
        fieldName: "Name", //fileds 에 정의한 필드네임과 매칭
        type: "data",
        width: "150",
        styles: {
            textAlignment: "center",
        },
        header: {
            text: "이름",
            showTooltip: false,
            // tooltip: '<span style="color: red;">이름</span>',
        },
        // renderer: {
        //     type: "text",
        //     showTooltip: true,
        // },
    },
    {
        name: "RegiNumber",
        fieldName: "RegiNumber",
        type: "data",
        width: "230",
        styles: {
            textAlignment: "center",
        },
        header: {
            text: "등록번호",
            showTooltip: false,
        },
        numberFormat: "0",
    },
    {
        name: "Sex",
        fieldName: "Sex",
        type: "data",
        width: "150",
        styles: {
            textAlignment: "center",
        },
        header: {
            text: "성별",
            showTooltip: false,
        },
    },
    {
        name: "Age",
        fieldName: "Age",
        type: "data",
        width: "130",
        styles: {
            textAlignment: "center",
        },
        header: {
            text: "나이",
            showTooltip: false,
        },
        numberFormat: "0",
    },
    {
        name: "Call",
        fieldName: "Call",
        type: "data",
        width: "300",
        styles: {
            textAlignment: "center",
        },
        header: {
            text: "호출",
            showTooltip: false,
        },
        renderer: {
            type: "icon",
            iconMap: {
                "call": "../icon/call.png",
                "doctor": "../icon/doctor.png"
            },
            iconHeight: 32,
            iconWidth: 32,
        },
        // renderer: {
        //     type: "image",
        //     imageMap: {
        //         "call": "../icon/call.png",
        //         "doctor": "../icon/doctor.png"
        //     },
        //     imageHeight: 30,
        // },
    },
];

//실제 데이터
export const rows = [
    {
        State: "진료 중",
        Time: "15:32",
        Name: "김더존",
        RegiNumber: "1711020",
        Sex: "F",
        Age: "19",
        // Call: "call",
    },
    {
        State: "대기",
        Time: "15:34",
        Name: "김더존",
        RegiNumber: "1711021",
        Sex: "M",
        Age: "24",
        Call: "이미지",
    },
    {
        State: "대기",
        Time: "15:42",
        Name: "김더존",
        RegiNumber: "1711022",
        Sex: "M",
        Age: "42",
        Call: "이미지",
    },
    {
        State: "보류",
        Time: "15:43",
        Name: "김더존",
        RegiNumber: "1711023",
        Sex: "F",
        Age: "15",
        Call: "이미지",
    },
    {
        State: "보류",
        Time: "15:52",
        Name: "김더존",
        RegiNumber: "1711024",
        Sex: "M",
        Age: "33",
        Call: "이미지",
    },
];
