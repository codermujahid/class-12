
/**
 * class review----11-p2
 * ===========================
 */

// const box = document.createElement('div');
// box.classList.add('box');

// const heading = document.createElement('h1');

// const headingtext = document.createTextNode('Wi love Mern stack')

// heading.appendChild(headingtext);


// const para = document.createElement('p');
// para.style.padding = '10px'
// para.style.color  = 'yellow'

// const paratext = document.createTextNode('Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, excepturi recusandae saepe iusto pariatur quo soluta sapiente numquam et. Pariatur ipsam labore delectus velit nam animi adipisci nobis voluptates ratione!')

// para.appendChild(paratext);


// const link = document.createElement('a');
// link.innerHTML = 'Apply Now';
// link.setAttribute('href' , '#');
// link.classList.add('btn');
// link.classList.add('btn-danger');


// const para2 = document.createTextNode('Hi Mujahid');

// para.appendChild(paratext);
// box.appendChild(heading);
// box.appendChild(para);

// box.insertBefore(link, para);


// document.getElementById('root').append(box);
  


/**
 * bootstarp er class dhorar niom
 * ================================
 */

// const cotainer = document.createElement('div');

// cotainer.classList.add('cotainer');


// const row = document.createElement('div');
// row.classList.add('row');

// const col = document.createElement('div');
// row.classList.add('col-md-5');


// const para = document.createElement('p');
// para.innerHTML = 'Tumi amar valobasha. ar ami toma hgreenar asha..';


// col.appendChild(para);
// row.appendChild(col);
// cotainer.appendChild(row);


// document.getElementById('boot').append(cotainer);



/**
 * Event Listener er vihavear
 * =============================
 */


// const btn = document.querySelector('.btn');
// const h1 = document.querySelector('h1');

// btn.addEventListener('click', function () {
//     alert('mujahid');
// })

// h1.addEventListener('click', function () {
//     alert();
// })

// h1.addEventListener('click',   () =>{
//     alert();
// })

// function btnTumkikoro() {
//     alert('ami aci to  tumi ki koro')
// }

// const btnTumkikoro = () => {
//     alert('ami aci to  tumi ki koro')
// }


// h1.addEventListener('click',  btnTumkikoro);


/**
 *event 2 vabe usge korajay 1.onclick er madhome 2.addEventListener er madhome
 * ======================
 */

// const btn = document.querySelector('.btn');
// const h1 = document.querySelector('h1');


// btn.addEventListener('click', () =>{
//     alert('hobeto');
// })

// h1.onclick = () => {
//     alert('HTMLOptionsCollection');
// }


// btn.onclick = () => {
//     h1.innerHTML = 'We Love js';
//     h1.style.color =  'red';
//     h1.style.fontFamily =  'impact';
    
// }




/**
 * Mouse Event- start-------!
 * =================>
 */

// const p = document.querySelector('p');

// p.onclick = () => {
//     p.innerHTML = 'Apnai kamon asen'; 
// }

// p.ondblclick = () => {
//     p.innerHTML = 'Apnai kamon asen';
// }

// p.onmouseenter = () => {
//     p.innerHTML = 'Apnai kamon asen';
// }

// p.onmouseleave = () => {
//     p.innerHTML = 'Apnai kamon asen';
// }

// p.onmousedown = () => {
//     p.innerHTML = 'Apnai kamon asen';
// }

// p.onmouseup = () => {
//     p.innerHTML = 'Apnai kamon asen';
// }
/**
 * Mouse Event end-----------!
 * =================>
 */





const button = document.getElementById('add');
const remove = document.getElementById('remove');
const output = document.getElementById('data');
const sound = document.getElementById('sound');
const no1 = document.getElementById('no1');
const alart = document.getElementById('alart');


let count = 0;


// button.onclick = () => {

//     output.innerHTML = count;
//     count++;
//     if (count <= 10 ) {
//         output.innerHTML = count
//         alart.innerHTML = '';
//     }else{
//         count = 10;
//         no2.play();
//         alart.innerHTML = 'Apnake na bolci ar click korbenna';

//     }

// }

// remove.onclick = () => {
    
//     count--;
//     if (count >= 0 ) {
//         output.innerHTML = count;
//     }else{
//         count = 0;
//         alart.innerHTML = 'Apnake na bolci ar click korbenna ai khane ar kisui nai';
//         alart.style.color = 'red'

//     no1.play();

//     }

// }

// sound.onclick = () => {
//     no1.play();
// }



// button.onclick = () => {
//     setTimeout(() => {
//         output.innerHTML = 'I Love you '
//     }, 5000);
// };


// remove.onclick = () => {
//     setTimeout(() => {
//         output.innerHTML = 'Remove'
//     }, 5000);
// };

let stopCount = 0;

button.onclick = () => {
    stopCount = setInterval( () => {
        count++

        if (count <= 10 ) {
            output.innerHTML = count; 
            no2.play(); 
        } else {
            count = 10;
            no1.play();
        }

        
    
    }, 1000);
};

remove.onclick = () => {
    
    count--;
    if (stopCount >= 0 ) { 
        clearInterval(stopCount);
        no1.play();

    }else{
        count = 0;
        alart.innerHTML = 'Apnake na bolci ar click korbenna ai khane ar kisui nai';
        alart.style.color = 'red'

    no1.play();

    }
  
}
 

// remove.onclick = () => {
//     clearInterval(stopCount);
//     no1.play();
// };
 
 





