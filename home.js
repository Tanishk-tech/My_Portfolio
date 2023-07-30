let s = "Full Stack Software Developer....",t="Competitive Programmer....",s1=0,flag = 0;
const length1 = s.length;
const length2 = t.length;

const Intro = document.querySelector('.intro');

console.log(Intro.innerHTML);
const initial_length = Intro.innerHTML.length;
let i=0, test=s.slice(),length;
setInterval(() => {
    if(s1==0){
        test=s.slice();
        length = length1;
    }else{
        test=t.slice();
        length = length2;
    }
    if(flag==0){
        if(i<length){
            Intro.innerHTML += test[i];
            i++; 
        }
        if(i==length)
        flag=1;
    }
    else{
            if(i>0){
                Intro.innerHTML = Intro.innerHTML.slice(0,initial_length + i - 1);
                i--;
            }
            if(i==0){
                flag=0;
                if(s1==0){
                    s1=1;
                }else{
                    s1=0;
                }
            }
    } 
}, 200);