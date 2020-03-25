export default [
    {
        id: "section1",
        parentMenuId: 0,
        name: "section I",
        icon: "el-icon-message",
        alias: "Section I",
        state: "ENABLE",
        type: "NONE"
    },
    {
        id: "section2",
        parentMenuId: 0,
        name: "section II",
        icon: "el-icon-message",
        alias: "Section II",
        state: "ENABLE",
        type: "NONE",
        childs: [
            {
                id: "section2_partA",
                parentMenuId: 0,
                name: "Part A",
                icon: "el-icon-message",
                alias: "Part A",
                state: "ENABLE",
                type: "NONE",
                childs: [
                    {
                        id: "section2_partA_text/1",
                        parentMenuId: 0,
                        name: "Text 1",
                        icon: "el-icon-message",
                        alias: "Text 1",
                        state: "ENABLE",
                        type: "NONE"
                    },
                    {
                        id: "section2_partA_text/2",
                        parentMenuId: 0,
                        name: "Text 2",
                        icon: "el-icon-message",
                        alias: "Text 2",
                        state: "ENABLE",
                        type: "NONE"
                    },
                    {
                        id: "section2_partA_text/3",
                        parentMenuId: 0,
                        name: "Text 3",
                        icon: "el-icon-message",
                        alias: "Text 3",
                        state: "ENABLE",
                        type: "NONE"
                    },
                    {
                        id: "section2_partA_text/4",
                        parentMenuId: 0,
                        name: "Text 4",
                        icon: "el-icon-message",
                        alias: "Text 4",
                        state: "ENABLE",
                        type: "NONE"
                    }
                ]
            },
            {
                id: "section2_partB",
                parentMenuId: 0,
                name: "Part B",
                icon: "el-icon-message",
                alias: "Part B",
                state: "ENABLE",
                type: "NONE"
            },
            {
                id: "section2_partC",
                parentMenuId: 0,
                name: "Part C",
                icon: "el-icon-message",
                alias: "Part C",
                state: "ENABLE",
                type: "NONE"
            }
        ]
    },
    {
        id: "section3",
        parentMenuId: 0,
        name: "section III",
        icon: "el-icon-message",
        alias: "Section III",
        state: "ENABLE",
        type: "NONE"
    }
]