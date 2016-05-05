//BubbleSort
function bubbleSort(arr){
    var len = arr.length,flag,pos,count=len;
    for (var i = 0; i<len-1; i++){
        flag=true;
        for(var j = 1; j<count; j++){ //只遍历到最后交换的位置即可
            if(arr[j-1]>arr[j]){
                var temp = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = temp;
                flag=false;           //标记是否有元素调换位置
                pos=j;                //记录最后交换的位置
            }
        }
        count=Math.min(len-i,pos);
        if(flag) break;               //没有的话，说明全排好序了，直接跳出
    }
    return arr;
}
bubbleSort([7,6,5,4,3,2,1]);

//SelectionSort
function SelectionSort(arr) {
    var len = arr.length,minId = 0,temp,flag;//标记最小值是否变化
    for (var i = 0; i < len-1; i++) {
        minId = i;
        flag = false;
        for (var j = i+1; j < len; j++) {
            if (arr[minId] > arr[j]) {
                minId = j;
                flag = true;
            }
        }
        if (flag) {
            temp = arr[minId];
            arr[minId] = arr[i];
            arr[i] = temp;
        }
    }
    return arr;
}
SelectionSort([4,3,2,1]);

//InsertionSort
function InsertionSort(arr){
    var len=arr.length,pos;
    for(var i=1;i<len;i++){
        var temp=arr[i];pos=-1;
        for(var j=i-1;j>=0;j--){
            if(arr[j]>temp) {
                arr[j+1]=arr[j];
                pos=j;
            }
        }
        if(pos!=-1){
            arr[pos]=temp;
        }
    }
    return arr;
}
InsertionSort([3,4,2,1,5]);

//ShellSort
function ShellSort(arr,gap){
    var len=arr.length,pos,gap=gap||5;
    while(gap>0) {
        for (var i = gap; i < len; i++) {
            var temp = arr[i];
            pos = -1;
            for (var j = i - gap; j >= 0; j -= gap) {
                if (arr[j] > temp) {
                    arr[j + gap] = arr[j];
                    pos = j;
                }
            }
            if (pos != -1) {
                arr[pos] = temp;
            }
        }
        gap=Math.floor(gap/2);
    }
    return arr;
}
ShellSort([7,9,4,1,6,3,2,8,5]);

//MergeSort
function MergeSort(arr){
    function Merge(left,right){
        var lLen=left.length,rLen=right.length,newArr=[];
        for(var i= 0,j=0;i<lLen,j<rLen;){
            if(left[i]<right[j]){
                newArr.push(left[i++]);
            }else{
                newArr.push(right[j++]);
            }
        }
        return newArr.concat(left.slice(i)).concat(right.slice(j));
    }
    var len=arr.length;
    if(len<2) return arr;
    var mid = Math.floor(len / 2),
        left = arr.slice(0, mid),
        right = arr.slice(mid);

    return Merge(MergeSort(left),MergeSort(right));
}

MergeSort([7,9,4]);

//QuickSort
function QuickSort(arr,left,right){
    function swap(array,i,j){
        var temp=array[i];
        array[i]=array[j];
        array[j]=temp;
    }
    function partition(array,left,right) {
        var pivot = array[right], storeIndex = left;
        for (var i = left; i < right; i++) {
            if (array[i] < pivot) {
                swap(array,i,storeIndex);
                storeIndex++;
            }
        }
        swap(array,right, storeIndex);
        return storeIndex;
    }
    if(left>right) return;
    var storeIndex=partition(arr,left,right);
    QuickSort(arr,0,storeIndex-1);
    QuickSort(arr,storeIndex+1,right);
    return arr;
}
QuickSort([3,5,2,6,1,4],0,5);

//HeapSort
function HeapSort(arr){
    var len=arr.length;
    function swap(array,i,j){
        var temp=array[i];
        array[i]=array[j];
        array[j]=temp;
    }
    function siftDown(array,start,end){
        while(true){
            var root=start,lChild=2*root+ 1,rChild=2*(root+1);
            if(array[lChild]>array[root]&&lChild<end) start=lChild;
            if(array[rChild]>array[root]&&rChild<end) start=rChild;
            if(root!=start) swap(array,start,root);
            else break;
        }

    }
    function heapify(array,length){
        var parents=Math.floor((length-1)/2);
        while(parents>=0){
            siftDown(array,parents--,length);
        }
    }
    heapify(arr,len);
    for(var i=len-1;i>=0;i--){
        swap(arr,0,i);
        siftDown(arr,0,i);
    }
    return arr;
}
HeapSort([3,2,7,1,4,6,5]);
