export const getTaskListLengthFromLocalStorage = () => {
    const arr = localStorage.getItem("taskList");
    if (arr !== null) {
        const obj = JSON.parse(arr);
        if (Array.isArray(obj)) {
            return obj.length;
        }
    }
    return 0;  
};
