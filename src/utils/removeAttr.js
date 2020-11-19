export default (obj, string)=>{
  const temp = obj ;

  console.log(temp);
  delete temp[string];
  console.log(obj);
  return temp;
};
