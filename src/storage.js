const STORAGE_KEY = "dataPerokok";

export function getData() {
    const data = localStorage.getItem(STORAGE_KEY);

    return data ? JSON.parse(data) : [];
}

export function saveData(newData) {
    const oldData = getData();

    const updatedData = [...oldData, newData];

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedData));

    return updatedData;
}