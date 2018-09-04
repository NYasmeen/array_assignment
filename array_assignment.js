 a=["N","A","N","D","S","E","P"];
x=a.length;

for(i=0;i<=x;i++){
  for(j=0;j<=x ;j++)
if(a[i]==a[j] && i!=j){
  console.log(a[i]);
  break;
}

}

