import React from 'react';
import './TitleAndMission.css';
import { Link } from 'react-router-dom';
//import Image from 'react-image-resizer';

const TitleAndMission: React.FC = () => {
    const text = "develop intelligent algorithms to support our society";
    const highlightIndices = [2, 8, 24, 31, 35, 42, 46, 47];
    const highlightColors = ["red", "blue", "green", "purple"];
    const text2 = "virtuoso";
    const highlightIndices2 = [0, 1, 2, 3, 4, 5, 6, 7];

    return (
        <div>
            <div className="title-and-mission">
                Virtuoso Research Lab focuses on advancing the research frontier of machine learning, design and analysis of algorithms, learning theory data, and neural networks. Our mission is to {text.split('').map((char, index) => (
                    highlightIndices.includes(index) ? (
                        <span key={index} className="bright-font" style={{ color: highlightColors[highlightIndices.indexOf(index) % highlightColors.length] }}>{char}</span>
                    ) : char
                ))} ({text2.split('').map((char, index) => (
                    highlightIndices2.includes(index) ? (
                        <span key={index} className="bright-font" style={{ color: highlightColors[highlightIndices2.indexOf(index) % highlightColors.length] }}>{char}</span>
                    ) : char
                ))}). We believe that intelligent heuristic are the future of computing, and we hope to make an impact through our research.
                <ul>
                    <li> We are commited to pursuing fundamental, open research, hoping to spark new directions and innovations for future work. </li>
                    <li> We are always open to working with researchers and engineers who are passionate about technology, and aspire to connect computer science to our society in a positive way. </li>
                </ul>
                <p>
                    The team comprises of a diverse team of students and researchers who are passionate about advancing technology, at the same time hoping to make a tangible impact. We are currently mainly working on two sets of projects:
                    <ul>
                        <li>On the theoretical / algorithmic side, we have been working on generalization of neural networks, matrix and tensor methods, and optimization algorithms. We have been developing non-vacuous generalization measures for deep neural networks, though a novel technique of Hessian (in an <a href="https://arxiv.org/abs/2206.02659">ICML'22 paper</a>). We are actively working on advancing the efficiency of using large neural networks (see our <a href="https://arxiv.org/abs/2409.19458">EMNLP'24 paper</a>).</li>
                        <li>On the machine learning side, we have been working on developing neural networks for simultaneously optimizing multiple task objectives. This problem has applications in language models, federated learning, to name a few. We have been trying out various applications, one example is to predict traffic accidents (see our <a href="https://arxiv.org/abs/2311.00164">NeurIPS'23 paper</a>).</li>
                    </ul>
                </p>    
            </div>
            <div className="section">
                <h3>Research</h3>
                <p>
                    Here are links to some of our ongoing projects with more information
                    <ul>
                        <li> <Link to="/mtlandfinetuning" className="news-link">Multitask learning and fine-tuning</Link> (measurements and algorithms for representational transfer)</li>
			<li> Efficient algorithmic primitives for modern machine learning (see an <a href="https://arxiv.org/abs/2206.02659">ICML'22 paper</a>, and <a href="http://arxiv.org/abs/2302.04451">AISTATS'23 paper</a>) </li>
			<li> <a href="https://github.com/VirtuosoResearch/ML4RoadSafety">Data analysis for aiding road safety with graph neural networks</a> </li>
                    </ul>
                </p>
            </div>
            <div className="section">
                <h3>Contact</h3>
                <p>We are always looking for students to join our research projects. If you have ideas, we would love to chat. You may take a look at our recent papers and projects first. The ideal student should to be self-motivated, and have a strong background in mathematics and/or programming.</p>
            </div>
            <div>
                <p>
                </p>
            </div>            
        </div>
    );
};

export default TitleAndMission;

//                <p><strong>Email:</strong> hongyang90@gmail.com</p>
