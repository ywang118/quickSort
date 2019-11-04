

//QuickSort
//step:
//1 select the element call pivot
//2 rearranged the array, such that all the elements less than the pivot are towards the left of it. all the elements greater than the pivot are towards to the right. we call this the partition of the list.
//3 Break this problem into 2 sub-problems
     // sort the segment array to the left of pivot.
     // sort the segment array to the right of pivot.


var arr = [7,2,1,6,8,5,3,4];

function quickSort(arr, start, end){
  //segment is invalid or only having one element, will exit
  if(start >= end){
    return arr
  }

  var left = start,
      right = end,
      pivot = arr[start];

  while(left< right){
    //check the value from the right, make sure all of the value is greater than pivot.
    //decrement from the right, until the value is less than pivot
    while (left < right && arr[right]>= pivot) {
      right--;
    }
    //move value to the left
    arr[left]=arr[right]

    //check the value from the left, make sure all of the value is smaller than pivot.
    while (left < right && arr[left]<= pivot) {
      left++;
    }
    arr[right]= arr[left]

  }
  // replace pivot, and get the index of the partition
  arr[left]= pivot

  // make 2 recursive calls one to solve the segment left of the partition index, and  one to solve the right.
  quickSort(arr,low,left-1);
  quickSort(arr,left+1, right);
}


quickSort(arr, 0, arr.length - 1);

console.log(arr)
