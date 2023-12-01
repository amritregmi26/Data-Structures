const binarySearch = (arr, item) => {
    let start = 0,
        end = arr.length - 1;

    while(start <= end)
    {
        let mid = Math.floor((start + end) / 2);

        if(arr[mid] === item) return "Found";

        else if(arr[mid] < item) start = mid + 1;

        else end = mid - 1
    }

    return "Not Found";
}