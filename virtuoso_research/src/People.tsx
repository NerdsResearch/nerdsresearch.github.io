
import React from 'react';
import Header from './Header';
import './People.css';

// Member component
const Member: React.FC<{ name: string, position: string, details: string[], imageSrc: string, link: string}> = ({ name, position, details, imageSrc, link }) => {
    const imageWidth = 80; // Image width

    return (
        <div className="member">
            <div className="member-image">
                <img
                    src={imageSrc}
                    alt={name}
                    width={imageWidth}
                    height="auto"
                />
            </div>
            <div className="member-details">
                <h3><a href={link}>{name}</a></h3>
                <p>{position}</p>
                <ul>
                    {details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const Group: React.FC = () => {
    const defaultImageSrc = "default.jpg"; // Default image source

    // Data for faculty
    const facultyData = [
        {
            name: "Hongyang Ryan Zhang",
            position: "Assistant Professor of Computer Science",
            details: [
//                "Ph.D. in computer science from Stanford",
//                "Postdoc at University of Pennsylvania",
//                "Etc",
            ],
            imageSrc: "hongyang.png", // Replace with actual image path
            link: "https://www.hongyangzhang.com/"
        },
    ];

    // Data for students and postdocs
    const phdStudentsData = [
        {
            name: "Dongyue (Oliver) Li",
            position: "Ph.D. Student (2021-)",
            details: [
                "B.E. in CS, Shanghai Jiao Tong University",
            ],
            imageSrc: "dongyue.jpg", // Replace with actual image path
            link: "/"
        },
        {
            name: "Mahdi Haghifam",
            position: "Khoury Postdoctral Fellow (2023-)",
            details: [
                "Ph.D. from University of Toronto",
								"Jointly mentored by Prof. Jonathan Ullman"
            ],
            imageSrc: "Mahdi_Haghifam.jpg", // Replace with actual image path
            link: "/"
        },
        {
            name: "Haotian Ju",
            position: "Ph.D. Student (2024, incoming)",
            details: [
                "M.S. in Data Analytics Engineering, Northeastern University",
								"B.S. in Applied Mathematics, Tsinghua University"
            ],
            imageSrc: "haotian.png", // Replace with actual image path
            link: "/"
        },
        {
            name: "Abhinav Nippani",
            position: "Master's Student (2023-)",
            details: [
                "Bachelor in Electrial and Electronics Engineering, BITS Pilani, Hyderabad",
            ],
            imageSrc: "Abhinav_Nippani.jpeg", // Replace with actual image path
            link: "/"
        },
        {
            name: "Jinhong Yu",
            position: "Master's Student (2021-)",
            details: [
                "M.S. in AI, Northeastern University",
            ],
            imageSrc: "jinhong.jpeg", // Replace with actual image path
            link: "/"
        },
        {
            name: "Allen Ye",
            position: "Undergraduate Researcher (2023-)",
            details: [
                "B.S. in CS, Northeastern University",
            ],
            imageSrc: "allen.png", // Replace with actual image path
            link: "/"
        },
        {
            name: "Debankita Basu",
            position: "Master's Student Researcher (2023-)",
            details: [
                "B.S. in CS, UMass Amherst",
            ],
            imageSrc: "Debankita_Basu.jpeg", // Replace with actual image path
            link: "/"
        },
        {
            name: "Kailai Chen",
            position: "Visiting Student Researcher (2023-)",
            details: [
                "B.S. in Maths and Statistics (2024, expected), Xi'an Jiao Tong University",
            ],
            imageSrc: "kailai.jpg", // Replace with actual image path
            link: "/"
        },
        {
            name: "Aidan McKnight",
            position: "Master's Student Researcher (2021-)",
            details: [
                "B.S. in Engineering Physics, Rose-Hulman Institute of Technology",
            ],
            imageSrc: "aidan.jpg", // Replace with actual image path
            link: "/"
        },

    ];

    // Collaborators data
    const collaboratorsData = [
        "Tina Eliassi-Rad (Professor, Northeastern)",
				"Haris Koutsopoulos (Professor, Northeastern)",
				"Huy Nguyen (Assoc. Professor, Northeastern)", 
				"Predrag Radivojac (Professor, Northeastern)",
        "Aneesh Sharma (Software Engineer, Google)",
        "Fan Yang (Asst. Professor, Tsinghua)",
        // Add more collaborators as needed
    ];


    return (
        <div>
            <Header />

            <div className="group-container">


                {/* Students and Postdocs section */}
                <section className="group-section">
                    <h2>Students and Postdocs</h2>
                    <div className="members">
                        {phdStudentsData.map((person, index) => (
                            <Member
                                key={index}
                                name={person.name}
                                position={person.position}
                                details={person.details}
                                imageSrc={person.imageSrc}
                                link={person.link}
                            />
                        ))}
                    </div>
                </section>
                {/* Faculty section */}
                <section className="group-section">
                    <h2>Faculty</h2>
                    <div className="members">
                        {facultyData.map((person, index) => (
                            <Member
                                key={index}
                                name={person.name}
                                position={person.position}
                                details={person.details}
                                imageSrc={person.imageSrc}
                                link={person.link}
                            />
                        ))}
                    </div>
                </section>

                <section className="group-section collaborators">
                    <h2>Collaborators</h2>
                    <div className="members">
                        <ul>
                            {collaboratorsData.map((collaborator, index) => (
                                <li key={index}>{collaborator}</li>
                            ))}
                        </ul>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default Group;
