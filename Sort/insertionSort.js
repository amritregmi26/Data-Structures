let insertionSort = (arr) => {
    for(let i = 1; i < arr.length; i++)
    {
        let key = arr[i];
        j = i - 1;

        while(j >=0 && key < arr[j])
        {
            [arr[j+1], arr[j]] = [arr[j], key];
            j--;
        }
    }
    return arr
}
