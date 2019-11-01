const grade = 60;

switch(true){
    case grade >= 70:
        console.log('Distinction');
        break;
    case grade >= 60:
        console.log('Merit');
        break;
    case grade >= 50:
        console.log('Pass');
        break;
    default:
        console.log('Failed');
}