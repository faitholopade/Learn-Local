import React from 'react';
import '../styles/Learnmore.css';
// import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlay as pointer} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
function Learnmore() {
    const [activeTab, setActiveTab] = useState(null);

    const handleTabClick = (tab) => {
      setActiveTab(tab === activeTab ? null : tab)
    };


    const renderTabContent = () => {
      switch (activeTab) {
        case 'aboutFounder':
        case null :
          return (
                <div className = 'tabcontent'>
                    <p >
                    <strong><em>“By the time our children are adults, they won’t know how to cook. I want to change that”.</em></strong>
                    </p>
                    <p>
                        My name is Éilis Davenport, Founder of Learn Local, a new skills focused startup with the intention of improving food education and reducing food poverty.
                        "An inclusive, accessible food education organisation that cares about the health and wellbeing of future generations. I want Learn Local to be a leader in changing the face of food education in Ireland.
                        I am a chef with over 15 years’ experience and have worked in Michelin starred restaurants, cafes, corporate and gastropubs, both here and abroad. I grew up watching home cooking fade out, and grab and go, convenience foods make their way in. Cooking from good quality, local produce is very important to me, and I have a strong passion to improve food education.
                        I am an early school leaver, thankful to Ballymun Regional Youth Resource, who opened the door to my career path when I was 16. Now a mother of two young boys, I want to use my 15 years’ culinary experience to make a real difference in the food education system in Ireland, and start this in Dublin.
                        I have recently participated in Social Entrepreneurs Ireland, Ideas Academy Programme. 
                    <p/>
                        Read about it here: 
                        <a href="https://www.socialentrepreneurs.ie/our-programmes/ideas-academy/" target="_blank" rel="noopener noreferrer">Social Entrepreneurs Ireland - Ideas Academy</a>.
                    </p>
                </div>);
        case 'theProblem':
          return (
          <div className="tabcontent">
                <p>
                Food poverty is a huge problem in Ireland, and it is generational. Unfortunately, there is not enough being done to tackle 
                this problem and although there are good resources available, they are stretched beyond their means to provide for families 
                and their children. Basic life skills, basic nutrition, the knowledge of where food comes from, and how it ends up on our tables are fading, resulting in chronic health problems.
                </p>
                <p>
                    What causes food poverty? Lack of education, limited access to good food, poor or restricted living conditions 
                    are all factors. There are children going to school hungry, suffering from obesity, and having weakened immune systems as a 
                    consequence to these causes. Tackling these causes at the root are key to change in behaviors around food choices in years to come.
                </p>
        </div>);
        case 'theSolution':
            return (
            <div className="tabcontent">
                 <p>
                    The Learn Local Food Programme teaches basic culinary and food sustainability skills to children and parents 
                    with the aim of improving food education and reducing food poverty. Local suppliers, growers, and retailers that are within a 
                    10-20km radius of the program delivery location are used wherever possible, reducing food miles and preventing unnecessary food waste by using surplus produce if available.
                </p>
                <p>
                    The connections and story between the plant in the ground or meat/fish source, and the plate we eat off is 
                    disappearing too quickly so these connections are emphasised in the programme. Whether we use a local veg market 
                    or strawberries from a farm in Wexford, the story of how it got there and the respect owed to that product is honoured.  
                    The programme builds a relationship around food and the people in the community. It teaches how we can reduce food waste and plan smartly to avoid overspending. It empowers participants to cook from fresh, local ingredients and reduce the convenience and highly processed food choices.
                </p>
                <p>
                    There are different versions of the programme to suit every age i.e. for children in primary school, 
                    children in secondary schools and parents.  I have the equipment on hand to go into any HACCP approved space and 
                    deliver a 6 week programme that will give children the basic skills to understand food sources and the confidence to 
                    prepare, cook and  try nutritious and delicious, easy to prepare locally sourced foods. Teaching children at a young age 
                    will broaden their palette, and influence good food choices for themselves and in the future, their families in which will break 
                    the generational cycle that is contributing to food poverty here in the area. In 10 years’ time the children who have participated in this 
                    programme will have a better awareness as to what is healthy for them and their families, which will directly affect the food poverty and 
                    child obesity problems in a positive way. 
                </p>
          </div>);
        case 'theImpact':
            return (
            <div className="tabcontent">
                 <p>
                    The programme has been delivered to parents in the Aisling Centre and has been very successful, with returning participants each week engaging in the programme and growing confident in their cookery skills. We will return in September to deliver another 4 week parents’ programme as well as a 6 week after school programme for young people. Workshops with young people between ages 9 - 16 have been well received also.

                    In 2022 while I was conducting my needs analysis research for the programmes the following information was discovered. From 100 teachers with most teaching primary school children:
                    <ul className="bullets">
                        <li> -- 81% of teachers feel that in today’s society, teaching food and culinary education in the curriculum is a necessity.</li>
                        <li> -- 71% of teachers said their schools do not engage with local growers and producers to help teach pupils about growing, preparing and cooking food.</li>
                        <li> -- Engaging local business and collaboration between the schools and producers/growers could potentially change the attitudes in some children around 
                        healthy food choices over convenience options.</li>
                    </ul>
                </p>
                <h3>The Learn Local Programme supports:</h3>
                <ul className="bullets">
                    <li>
                        <a href="https://www.dublincity.ie/residential/planning/strategic-planning/local-area-plans/local-area-plan-ballymun-area" target="_blank" rel="noopener noreferrer">The Dublin City Council Local Area Plan for Ballymun</a>
                        "The vision of the plan is to create a successful and sustainable new town with a thriving local economy that caters for all people."
                        Learn Local will only use food producers, growers, and small food business owners within a 10-20km radius of the school is extremely important, to encourage and practise sustainability, build and develop communities, and to support a circular economy in the locality.
                    </li>
                    <li>
                    <a href="https://www.milanurbanfoodpolicypact.org/" target="_blank" rel="noopener noreferrer">The Milan Urban Food Pact </a> 
                    is a framework for action with 6 categories. This has been adopted by over 100 cities worldwide. In Autumn 2023, the Ballymun/Finglas food forum will run a “manifesto workshop” to adopt and implement a similar strategy for the area.
                    </li>
                    <li>
                    <a href="https://sdgs.un.org/goals" target="_blank" rel="noopener noreferrer">The UN sustainability goals.</a> 
                    -"Learn Local aligns itself with Goals 1- Zero hunger, 2 - No Poverty, and 3 - Good health & Wellbeing."
                    </li>
                </ul>
          </div>);
          case 'aboutTheProgram':
            return (
            <div className="tabcontent">
                 <p>
                    This information contains details of the six week Learn Local food education programme. This programme will be adapted according to the age of the student, and the various amenities available within the catchment area. Utilising local food producers, growers and small food business owners within a 10-20km radius of the school is extremely important, to encourage and practise sustainability, build and develop communities, and to support a circular economy in the locality. Cooking is a lifelong skill that is being lost through generations. In order to combat food poverty, obesity and a convenience culture, it is vital that our generation teach and pass on best practices to the children for their future.
                </p>
                <p>
                    Incursion programme - will consist of 6, 2 hour workshops inclusive of all materials. This programme would be a class or a group of children of similar age range. (7-12)
                </p>
                <p>
                    Primary Incursion programme - Up to 12 - 24 pupils, along with support teachers/youth leaders/SNA support if required.
                </p>
                <h3>What is included in a workshop?</h3>
                <ul className="bullets">
                    <li> - Hat and Apron - keep the hat and decorate after!</li>
                    <li> - Personal Hygiene/Food Safety/Knife Safety</li>
                    <li> - Knife skills, basic cooking techniques.</li>
                    <li> - Creation of 2 recipes, one savoury with a good nutritive value and one treat</li>
                </ul>
                <h3>The following will be covered:</h3>
                <ul className="bullets">
                    <li> - Soups, bread, easy eggs, easy one pot dinners, microwave tricks, pasta & rice, meat & fish.</li>
                    <li> - Each week vegetables will be part of a recipe, to improve the knife skills and encourage confidence around new foods.</li>
                </ul>
                <h3>Learning outcomes of the programme:</h3>
                <ul className="bullets">
                    <li> - Knife skills</li>
                    <li> - Basic food safety and hygiene</li>
                    <li> - Practical cookery skills and technique</li>
                    <li> - Benefits of a healthy lifestyle</li>
                    <li> - Basic nutrition and function of nutrients in the body</li>
                    <li> - Using local ingredients, building relationships with local food producers</li>
                </ul>
                <h3>Programme Aims:</h3>
                <ul className="bullets">
                    <li> - Building confidence in using kitchen utensils in a safe manner.</li>
                    <li> - Teaching students how to make basic soups/sauces, preparing meat, fish and vegetables, using the basic cooking methods.</li>
                    <li> - Giving students the tools to prepare healthy nutritionally balanced meals with confidence and reducing food waste in the process.</li>
                    <li> - Connecting the schools/groups with the local food producers and community gardens in their areas. This may be a local allotment, school gardeners, the butchers, a bakery etc… building relationships between the people around the knowledge and preparation of food, which will have a long lasting effect on community growth.</li>
                    <li> - Please see additional documents for further information on our Parents programme and Transition year programme offered.</li>
                </ul>
          </div>);
        default:
          return null;
      }
    };
  return (
    <div className="learnmore">
    
        <div className = "outercontainer">
            <div className = "tabcontainer">
                {/* <div className = "pointer" style={{ left: `${(activeTab * 290) + 290 / 2}px`}}><FontAwesomeIcon icon = {pointer}/></div> */}
                <div className={`tab ${activeTab === 'aboutFounder' ? 'active' : ''}`} onClick={() => handleTabClick('aboutFounder')}>
                    <h2>About the Founder</h2>
                </div>
                <div className={`tab ${activeTab === 'theProblem' ? 'active' : ''}`} onClick={() => handleTabClick('theProblem')}>
                    <h2>The Problem</h2>
                </div>
                <div className={`tab ${activeTab === 'theSolution' ? 'active' : ''}`} onClick={() => handleTabClick('theSolution')}>
                    <h2>The Solution</h2>
                </div>
                <div className={`tab ${activeTab === 'theImpact' ? 'active' : ''}`} onClick={() => handleTabClick('theImpact')}>
                    <h2>Impact of the programme</h2>
                </div>
                <div className={`tab ${activeTab === 'aboutTheProgram' ? 'active' : ''}`} onClick={() => handleTabClick('aboutTheProgram')}>
                    <h2>About the Programme</h2>
                </div>
            </div>
            <div className="messageContainer">
                    {renderTabContent()}
            </div>
        </div>
    </div>
  )
}
            


        /* 
            

            
            <h2>Impact of the programme</h2>
            <p>
                The programme has been delivered to parents in the Aisling Centre and has been very successful, with returning participants each week engaging in the programme and growing confident in their cookery skills. We will return in September to deliver another 4 week parents’ programme as well as a 6 week after school programme for young people. Workshops with young people between ages 9 - 16 have been well received also.

                In 2022 while I was conducting my needs analysis research for the programmes the following information was discovered. From 100 teachers with most teaching primary school children:
                <ul className="bullets">
                    <li> -- 81% of teachers feel that in today’s society, teaching food and culinary education in the curriculum is a necessity.</li>
                    <li> -- 71% of teachers said their schools do not engage with local growers and producers to help teach pupils about growing, preparing and cooking food.</li>
                    <li> -- Engaging local business and collaboration between the schools and producers/growers could potentially change the attitudes in some children around 
                    healthy food choices over convenience options.</li>
                </ul>
            </p>
            <h3>The Learn Local Programme supports:</h3>
            <ul className="bullets">
                <li>
                    <a href="https://www.dublincity.ie/residential/planning/strategic-planning/local-area-plans/local-area-plan-ballymun-area" target="_blank" rel="noopener noreferrer">The Dublin City Council Local Area Plan for Ballymun</a>
                    "The vision of the plan is to create a successful and sustainable new town with a thriving local economy that caters for all people."
                    Learn Local will only use food producers, growers, and small food business owners within a 10-20km radius of the school is extremely important, to encourage and practise sustainability, build and develop communities, and to support a circular economy in the locality.
                </li>
                <li>
                <a href="https://www.milanurbanfoodpolicypact.org/" target="_blank" rel="noopener noreferrer">The Milan Urban Food Pact </a> 
                is a framework for action with 6 categories. This has been adopted by over 100 cities worldwide. In Autumn 2023, the Ballymun/Finglas food forum will run a “manifesto workshop” to adopt and implement a similar strategy for the area.
                </li>
                <li>
                <a href="https://sdgs.un.org/goals" target="_blank" rel="noopener noreferrer">The UN sustainability goals.</a> 
                -"Learn Local aligns itself with Goals 1- Zero hunger, 2 - No Poverty, and 3 - Good health & Wellbeing."
                </li>
            </ul>
            <h2>About the Programme</h2>
            <p>
            This information contains details of the six week Learn Local food education programme. This programme will be adapted according to the age of the student, and the various amenities available within the catchment area. Utilising local food producers, growers and small food business owners within a 10-20km radius of the school is extremely important, to encourage and practise sustainability, build and develop communities, and to support a circular economy in the locality. Cooking is a lifelong skill that is being lost through generations. In order to combat food poverty, obesity and a convenience culture, it is vital that our generation teach and pass on best practices to the children for their future.
            </p>
            <p>
            Incursion programme - will consist of 6, 2 hour workshops inclusive of all materials. This programme would be a class or a group of children of similar age range. (7-12)
            </p>
            <p>
            Primary Incursion programme - Up to 12 - 24 pupils, along with support teachers/youth leaders/SNA support if required.
            </p>
            <h3>What is included in a workshop?</h3>
            <ul className="bullets">
                <li> - Hat and Apron - keep the hat and decorate after!</li>
                <li> - Personal Hygiene/Food Safety/Knife Safety</li>
                <li> - Knife skills, basic cooking techniques.</li>
                <li> - Creation of 2 recipes, one savoury with a good nutritive value and one treat</li>
            </ul>
            <h3>The following will be covered:</h3>
            <ul className="bullets">
                <li> - Soups, bread, easy eggs, easy one pot dinners, microwave tricks, pasta & rice, meat & fish.</li>
                <li> - Each week vegetables will be part of a recipe, to improve the knife skills and encourage confidence around new foods.</li>
            </ul>
            <h3>Learning outcomes of the programme:</h3>
            <ul className="bullets">
                <li> - Knife skills</li>
                <li> - Basic food safety and hygiene</li>
                <li> - Practical cookery skills and technique</li>
                <li> - Benefits of a healthy lifestyle</li>
                <li> - Basic nutrition and function of nutrients in the body</li>
                <li> - Using local ingredients, building relationships with local food producers</li>
            </ul>
            <h3>Programme Aims:</h3>
            <ul className="bullets">
                <li> - Building confidence in using kitchen utensils in a safe manner.</li>
                <li> - Teaching students how to make basic soups/sauces, preparing meat, fish and vegetables, using the basic cooking methods.</li>
                <li> - Giving students the tools to prepare healthy nutritionally balanced meals with confidence and reducing food waste in the process.</li>
                <li> - Connecting the schools/groups with the local food producers and community gardens in their areas. This may be a local allotment, school gardeners, the butchers, a bakery etc… building relationships between the people around the knowledge and preparation of food, which will have a long lasting effect on community growth.</li>
                <li> - Please see additional documents for further information on our Parents programme and Transition year programme offered.</li>
            </ul>
            <h3>Testimonials:</h3>
                <p>
                    <em>“Eilis has great knowledge around cooking and food and was very easy to work with. She came up with the idea “What’s for dinner Ma?”. This was a series of workshops for parents, helping them to learn new skills while cooking for their families."</em>
                </p>
                <p>
                    <em>"The group learned different techniques and cooking styles. She provided quick and easy recipes, including some of the children’s favourite “fake aways”. Fresh ingredients from local suppliers were used and everything was made from scratch! Each week there was a lovely atmosphere, and the room was full of chatter and laughter. We plan to run another series of workshops in the near future.”</em>
                </p>
                <p className="name"><strong> - Aisling, Centre Manager, Ballymun East Child and Youth Centre</strong></p>
                <p>
                    <em>“As a Staff Member of AMP I was there as support, however I really enjoyed being part of the group. Getting to know parents/guardians was great, plus learning new ways to use ingredients so virtually nothing goes in the bin, and having delicious recipes, it’s a thumb’s up from me!”</em>
                </p>
                <p className="name"><strong> - Aisling mór Project staff member, Ballymun East child and Youth centre</strong></p>
                <p>
                    <em>"Eilis from Learn Local catered for two of our Community Conversation events in April and May of this year.  On both occasions she ingenuously transformed surplus food and food harvested from our kitchen garden into a delicious vegetarian meal and dessert.  By showcasing how to create easy meals with surplus food she highlighted the need to reduce food waste in a creative, engaging way.</em>
                </p>
                <p>
                <em>“Eilis was professional and approachable at all times.  She explained to attendees how she prepared the food and the significance of the ingredients with ease and confidence.  The flavours of the food left a lasting impression on the attendees.  It was inspiring for all and to have such a talented, community minded, local entrepreneur at our event.  I would recommend Eilis without hesitation.”</em>
                </p> */
               
      
  


export default Learnmore