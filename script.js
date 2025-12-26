const questions = [

/* ================= MCQ ================= */

{type:"mcq",q:"Nutritional disorders involving consumption of too many calories or specific nutrients is termed:",options:[
"Under nutrition","Starvation","Over nutrition","Malabsorption"],a:2},

{type:"mcq",q:"Which of the following is a common food trigger to avoid in GERD?",options:[
"Lean meat","Oatmeal","Peppermint","Ginger"],a:2},

{type:"mcq",q:"Marasmus is primarily caused by deficiency of:",options:[
"Protein only","Carbohydrates only","Both proteins and calories","Vitamin D and calcium"],a:2},

{type:"mcq",q:"The BRAT diet stands for:",options:[
"Beef, Rice, Apple, Tea",
"Bananas, Rice, Applesauce, Toast",
"Bread, Radish, Apricot, Toast",
"Bananas, Rice, Avocado, Tea"],a:1},

{type:"mcq",q:"A child with Kwashiorkor typically presents with:",options:[
"Extreme thinness and no edema",
"Edema and muscle wasting",
"Normal weight but high energy",
"Increased subcutaneous fat"],a:1},

{type:"mcq",q:"Iron deficiency anemia is characterized as:",options:[
"Macrocytic hyperchromic",
"Microcytic hypochromic",
"Megaloblastic",
"Normocytic"],a:1},

{type:"mcq",q:"Deficiency of which vitamin causes rickets in children and osteomalacia in adults?",options:[
"Vitamin A","Vitamin B12","Vitamin D","Vitamin C"],a:2},

{type:"mcq",q:"In chronic hepatic patients fat intake should not exceed:",options:[
"10%","30%","50%","70%"],a:1},

{type:"mcq",q:"The Glycemic Index indicates how rapidly ___ enters blood as glucose:",options:[
"Protein","Fat","Carbohydrate","Fiber"],a:2},

{type:"mcq",q:"A clear liquid diet is indicated for:",options:[
"Esophageal strictures",
"Chronic liver disease",
"Transition between IV and solid diet",
"Long-term nutrition"],a:2},

{type:"mcq",q:"Which food is recommended to help heal ulcers?",options:[
"Alcohol","Cabbage","Red meat","Mayonnaise"],a:1},

{type:"mcq",q:"Megaloblastic anemia results from deficiency of:",options:[
"Iron & copper","Vitamin B12 & folate","Calcium & phosphorus","Vitamin D"],a:1},

{type:"mcq",q:"Craniotabes and pigeon chest are signs of:",options:[
"Marasmus","Rickets","Obesity","Kwashiorkor"],a:1},

{type:"mcq",q:"Vegetarians who eat dairy and eggs are:",options:[
"Vegans","Lacto-vegetarians","Lacto-ovo-vegetarians","Ovo-vegetarians"],a:2},

{type:"mcq",q:"The DASH diet is designed for patients with:",options:[
"Diabetes","Hypertension","Peptic ulcer","Constipation"],a:1},

{type:"mcq",q:"Waddling gait with bone pain suggests:",options:[
"Iron deficiency","Osteomalacia","Starvation","GERD"],a:1},

{type:"mcq",q:"Which parasite causes Vitamin B12 deficiency?",options:[
"Hookworm","Schistosoma","Tapeworm","Amoeba"],a:2},

{type:"mcq",q:"For CHD, fish should be eaten at least:",options:[
"Once a month","Once a week","Twice a week","Daily"],a:2},

{type:"mcq",q:"Cachexia is commonly seen in:",options:[
"Obesity","Cancer","Rickets","Peptic ulcer"],a:1},

{type:"mcq",q:"To prevent constipation fluid intake should be at least:",options:[
"500 ml","1 liter","2 liters","5 liters"],a:2},

/* ================= TRUE / FALSE ================= */

{type:"tf",q:"Malnutrition includes over-nutrition and under-nutrition.",a:true},
{type:"tf",q:"Marasmus is more common in the second year of life.",a:false},
{type:"tf",q:"Serum iron is usually below 30 µg/dl in iron deficiency anemia.",a:true},
{type:"tf",q:"Lacto-vegetarians eat eggs but no dairy products.",a:false},
{type:"tf",q:"Rachitic rosary is beading of ribs in rickets.",a:true},
{type:"tf",q:"Vegans consume no animal foods at all.",a:true},
{type:"tf",q:"GERD patients should avoid eating 2–3 hours before bed.",a:true},
{type:"tf",q:"Full liquid diet has fewer calories than clear liquid diet.",a:false},
{type:"tf",q:"Type 1 diabetics must coordinate diet with insulin timing.",a:true},
{type:"tf",q:"Increased BMR can cause under-nutrition.",a:true},
{type:"tf",q:"Folic acid deficiency can result from low vegetable intake.",a:true},
{type:"tf",q:"Family planning helps prevent iron deficiency anemia.",a:true},
{type:"tf",q:"Hot peppers should be avoided in diarrhea.",a:true},
{type:"tf",q:"Hypertension patients should follow a high-sodium diet.",a:false},
{type:"tf",q:"Soy and folic acid are protective against cancer.",a:true},
{type:"tf",q:"Craniotabes is a late sign of rickets.",a:false},
{type:"tf",q:"Dietary fiber should be used wisely in IBS.",a:true},
{type:"tf",q:"In marasmus body weight is usually below 60% of normal.",a:true},
{type:"tf",q:"Saturated fats increase blood cholesterol.",a:true},
{type:"tf",q:"Peptic ulcer patients should drink plenty of milk.",a:false},

/* ================= ADVANCED ================= */

{type:"mcq",q:"Why are premature infants prone to rickets?",options:[
"They drink cow milk",
"Impaired vitamin D hydroxylation",
"They stay indoors",
"High fat stores"],a:1},

{type:"mcq",q:"Numbness of feet with mental disturbance suggests:",options:[
"Iron deficiency","Folate deficiency","Vitamin B12 deficiency","Vitamin D deficiency"],a:2},

{type:"mcq",q:"Finding seen in folate deficiency but NOT B12 deficiency:",options:[
"Large oval RBCs",
"Hypersegmented neutrophils",
"Reduced platelets",
"Low serum iron"],a:2},

{type:"mcq",q:"Why does kwashiorkor cause edema?",options:[
"High calories",
"Low plasma albumin",
"High fat intake",
"Parasitic infection"],a:1},

{type:"mcq",q:"Waddling gait in osteomalacia is due to:",options:[
"Brittle bones",
"Proximal muscle weakness",
"Iron deficiency",
"Obesity"],a:1},

{type:"tf",q:"Lacto-ovo vegetarians need less concern for complementary proteins than vegans.",a:true},

{type:"mcq",q:"Why add 20% energy in chronic liver disease?",options:[
"Weight loss",
"High metabolic stress",
"Low appetite",
"Prevent iron overload"],a:1},

{type:"tf",q:"Deficiency diseases rarely occur in pure form.",a:true},

{type:"mcq",q:"Main risk of clear liquid diet >3 days:",options:[
"Caffeine intake",
"Nutritional depletion",
"Low fiber",
"Sodium only"],a:1},

{type:"tf",q:"Solid fats are safer than liquid oils for heart health.",a:false},

];

/* SHUFFLE */
questions.sort(()=>Math.random()-0.5);

let index=0;
let answers=Array(questions.length).fill(null);

/* ELEMENTS */
const qText=document.getElementById("questionText");
const optionsDiv=document.getElementById("options");
const counter=document.getElementById("counter");
const progress=document.getElementById("progressBar");
const nextBtn=document.getElementById("nextBtn");
const retryBtn=document.getElementById("retryBtn");
const qList=document.getElementById("questionsList");

/* MENU */
function toggleMenu(){
  const m=document.getElementById("sideMenu");
  const o=document.getElementById("overlay");
  if(m.style.right==="0px"){m.style.right="-250px";o.style.display="none";}
  else{m.style.right="0";o.style.display="block";}
}

/* DARK MODE */
function toggleDark(){
  document.body.classList.toggle("dark");
}

/* QUIZ */
function startQuiz(){
  index=0;
  answers.fill(null);
  document.getElementById("home").style.display="none";
  document.getElementById("quiz").style.display="block";
  loadQuestion();
}

function loadQuestion(){
  optionsDiv.innerHTML="";
  nextBtn.style.display="none";

  const q=questions[index];
  qText.innerText=q.q;
  counter.innerText=`Question ${index+1} / ${questions.length}`;
  progress.style.width=((index+1)/questions.length*100)+"%";

  if(q.type==="tf"){
    createOption("True",true);
    createOption("False",false);
  }else{
    q.options.forEach((o,i)=>createOption(o,i));
  }
}

function createOption(text,val){
  const b=document.createElement("button");
  b.innerText=text;
  b.onclick=()=>select(val,b);
  optionsDiv.appendChild(b);
}

function select(val,btn){
  if(answers[index]!==null)return;
  answers[index]=val;

  const q=questions[index];
  [...optionsDiv.children].forEach((b,i)=>{
    const correct=q.type==="tf"?((i===0)===q.a):(i===q.a);
    if(correct)b.style.background="#27ae60";
    else if(b===btn)b.style.background="#e74c3c";
    b.disabled=true;
  });
  nextBtn.style.display="inline-block";
}

function nextQuestion(){
  if(index<questions.length-1){
    index++;
    loadQuestion();
  }else finishQuiz();
}

function finishQuiz(){
  let score=0;
  questions.forEach((q,i)=>{if(answers[i]===q.a)score++;});
  qText.innerText=`✅ Finished\nScore ${score}/${questions.length}`;
  optionsDiv.innerHTML="";
  counter.innerText="";
  nextBtn.style.display="none";
  retryBtn.style.display="inline-block";
}

function retryQuiz(){
  location.reload();
}

function toggleQuestions(){
  qList.innerHTML="";
  qList.style.display=qList.style.display==="block"?"none":"block";

  answers.forEach((a,i)=>{
    const d=document.createElement("div");
    d.className="q-item "+(a===null?"unanswered":a===questions[i].a?"correct":"wrong");
    d.innerText=i+1;
    d.onclick=()=>{index=i;loadQuestion();qList.style.display="none";}
    qList.appendChild(d);
  });
}