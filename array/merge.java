import java.util.Scanner;

class A{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        int arr[] = new int[10];
        int arr1[] = new int[10];
        System.out.println("Enter first array of size :");
        int size=sc.nextInt();
        System.out.println("Enter first  arrya :");
        for(int i=1;i<=size;i++){
            arr[i]= sc.nextInt();
        }
        System.out.println("ENter secound aaray of size :");
        int size1 = sc.nextInt();
        System.out.println("Enter secound array :");
        for(int j=1;j<=size1;j++){
            arr1[j]= sc.nextInt();
        }
        int newArr[] = new int[size+size1];
        int a = 0;
        for(int i=0; i<newArr.length; i++){
            if(i<size)
            newArr[i] = arr[i];
            else
            newArr[i] = arr1[i-size];
        }
        for(int i=0; i<newArr.length; i++){

            System.out.print(" "+newArr[i]);
        }
        
        
    }
}