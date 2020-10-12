# Proj1
<html>
<head>
<title> Nomfundo Mbali Biyela Technical Online CV </title>
<met name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"
    integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
    crossorigin="anonymous"></script>
<script src="script.js"></script>
<link rel="stylesheet" href="project1.css">
</head>
<body>
    <div class="weather-cont">
        <img class="icon">
        <p class="weather"></p>
        <p class="temp"></p>
    </div>
<div class="wrapper">
    <div class="cv">
        <div class="left">
            <div class="img">
                <img src="Noms.jpg" alt="picture">
            </div>
            <div class="contact wrap pb">
                <div class="title">
                    Contact
                </div>
                <dive class="contact">
                    <ul>
                        <li>
                            <div class="li">
                                <div class="icon"></div>
                                <div class="text">nomfundobiyela25@gmail.com</div>
                            </div>
                        </li>
                    </ul>
                </dive>
            </div>
            <div class="skills wrap pb">
                <div class="title">
                    Preferred Lingo
                </div>
                <dive class="skills">
                    <ul>
                        <li>
                            <div class="li">
                                <div class="icon"></div>
                                <div class="text">C#</div>
                            </div>
                        </li>
                        <li>
                            <div class="li">
                                <div class="icon"></div>
                                <div class="text">CSS</div>
                            </div>
                        </li>
                        <li>
                            <div class="li">
                                <div class="icon"></div>
                                <div class="text">HTML</div>
                            </div>
                        </li>
                    </ul>
                </dive> 
            </div>
            <div class="interests wrap pb">
                <div class="title">
                    Interests
                </div>
                <dive class="interest">
                    <ul>
                        <li>
                            <div class="li">
                                <div class="icon"></div>
                                <div class="text">Grapgical Design</div>
                            </div>
                        </li>
                        <li>
                            <div class="li">
                                <div class="icon"></div>
                                <div class="text">Web Design</div>
                            </div>
                        </li>
                        <li>
                            <div class="li">
                                <div class="icon"></div>
                                <div class="text">Mobile App Development</div>
                            </div>
                        </li>
                    </ul>
                </dive> 
            </div>
        </div>
        <div class="right">
            
            <div class="header">
                <div class="name_role">
                    <div class="name">
                        Nomfundo Mbali Biyela
                    </div>
                    <div class="role">
                        NWU Student
                    </div>
                </div>
                <div class="about">
                    A soon-to-be Information Technology Graduate and ready to take on the I.T. industry by storm
                </div>
            </div> 
            <div class="right_par">
                <div class="experience">
                    <div class="title">
                        Experience
                    </div>
                    <div class="exp">
                        <ul>
                            <li>
                                <div class="li">
                                    <div class="date">June 2019 - Present</div>
                                    <div class="info">
                                        <p class="info_title">I.T. Consultant</p>
                                        <p class="info_company">Silent Wolf Information and Communications Technology</p>
                                        <p class="info_cont">
                                            Website Development
                                            Website Maintainance
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="li">
                                    <div class="date">July 2019 - Present</div>
                                    <div class="info">
                                        <p class="info_title">Student Assistant</p>
                                        <p class="info_company">North West University</p>
                                        <p class="info_cont">
                                            Marking
                                            
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="education">
                    <div class="title">
                        Education
                    </div>
                    <div class="edu">
                        <ul>
                            <li>
                                <div class="li">
                                    <div class="date">2013 - 2017</div>
                                    <div class="info">
                                        <p class="info_title">Schooling</p>
                                        <p class="info_company">Athlone Girls' High School</p>
                                        <p class="info_cont">
                                           
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="li">
                                    <div class="date">2018 - Present</div>
                                    <div class="info">
                                        <p class="info_title">BSc in Information Technology</p>
                                        <p class="info_company">North West University</p>
                                        <p class="info_cont">
                                           
                                            
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

       
    </div>
</div>
</body>
</html>

<css>
* 
{
    margin:0;
    padding:0;
    box-sizing:border-box;
    list-style: none;
    font-family:sans-serif;
}
.weather-cont
{
    background: #ccc;
    text-align: center;
}
.weather
{
    font-size: 22px;
    margin: 0;
}
.temp
{
    font-size: 60px;
    margin: 0;
    font-weight: bold;
}
body
{
    background:linear-gradient(to right,#3525af, #9153c9);
    
}

.cv
{
    width: 800px;
    background: #fff;
    margin:25px auto;
    display: flex;

}
.left
{
    background: #292b2f;
    width: 250px;
    padding: 0 25px;
}
.left .img
{
    text-align: center;
    padding: 20px 0;
}
.left .img img
{
    width: 200px;
    border-radius: 30px;
}
.right
{
    width: calc(100% - 250px);
}
.pb
{
    padding-bottom: 20px;
}
.title
{
    font-size: 24px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 5px;
    padding-bottom: 10px;
    color: #3525af;
    position: relative;
    text-align: right;
    margin-bottom: 15px;
}
.title:before
{
    content: "";
    position: absolute;
    top: 35px;
    right: 0;
    width: 50px;
    height: 3;
    background: #3525af;
}
.left.icon
{
    font-size: 20px;
    color: #9153c9;
}
.left .text
{
    color: #9153c9;
    text-transform: uppercase;
    font-size: 13px;
}
.contact .li
{
   display: flex;
   align-items: center; 
   width: 100%;
   margin-bottom: 15px;
}
.contact .li .icon
{
    width: 50px;
    height: 50px;
    background: #fff;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
}
.contact .li .text
{
    width: calc(100% - 50px);
    word-break: break-word;
    color: #fff;
}

.skills ul,
.interest ul
{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.skills .li,
.interest .li
{
    width: 100px;
    height: 100px;
    margin-bottom: 15px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.skills .li .text,
.interest .li .text
{
    margin-top: 5px;
}
.skills .li
{
    background: #fff;
}
.skills .li:hover
{
    background: #292b2f;
}
.interest .li
{
    border: 2px solid #fff;
}
.interest .li:hover
{
    background: #fff;
}
.header
{
    background: #292b2f;
    padding: 15px 30px;
    color: #fff;
    height: 240px;
}
.header .name
{
    font-size: 52px;
    text-transform: uppercase;
    font-weight: 700;
    color: #3525af;
}
.header .role
{
    font-weight: 300;
    font-size: 20px;
}
.header .about
{
    margin-top: 20px;
    line-height: 26px;
}

.right_par
{
    padding: 30px;
    color: #292b2f;
}
.right_par .education
{
    margin-top: 30px;
}
.right_par .li
{
    display: flex;
    margin-bottom: 15px;
}
.right_par .li .date
{
    width: 125px;
    color: #9153c9;
}
.right_par .li .info
{
    width: calc(100% - 125px);
    padding-left: 25px;
    position: relative;
}
.right_par .li .info_title
{
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 2px;
    color: #9153c9;

}
.right_par .li .info_company
{
    font-weight: 300;
    font-size:14px;
    margin-top: 3px;
}
.right_par .li .info_cont
{
    margin-top: 15px;
}
.right_par .li .info:before
{
    content: "";
    position: absolute;
    top: 3px;
    left: 0;
    width: 10px;
    height: 10px;
    color: #9153c9;
    border-radius: 50%;
}
.right_par .li .info:after
{
    content: "|";
    position: absolute;
    top: 10px;
    left: 4px;
    width: 5px;
    height: 100%;
    color: #9153c9;
}   

</css>    


