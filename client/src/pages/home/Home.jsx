import React from "react";
import Featured from "../../components/featured/Featured";
import Slide from "../../components/slide/Slide";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import "./Home.scss";
import CatCard from "../../components/catCard/CatCard";
import { cards, projects } from "../../data";
import ProjectCard from "../../components/projectCard/ProjectCard";

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} item={card} />
        ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your fingertips</h1>
            <div className="title">
              <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIMA6QMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAgMEBQEH/8QAMBAAAgIBAwEGBAUFAAAAAAAAAAECAxEEEiExIjJBUWFxExSBkQUjQsHwUnKhseH/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAwECBAX/xAAgEQEBAQACAgIDAQAAAAAAAAAAAQIREgMxIVETMkEi/9oADAMBAAIRAxEAPwD6CAD5L64AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQAHoYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZ5auuNzpxLesY9crP8+nmjQThVZY+xGTz5Gycst4ZlfupVka7eWlhxafXy8iiOo1TinPSWbtiyuF2jpz02zm62qvz3TI40vjrqPo8nfSue+WPV3WadSnGnfWoNuW7GMFa1k42RU6ZbbLNtcsrx+vpn2OiqqbOIarTzz4bjyeltik5V7lHlNYa9zLmxvafbJdqPgy2ui5xxxKuG7+eH3Ix1sJTsjFSaj3ZY73t90ac85Q6rk5dQx6/QAAAAYAAAAAAAAAAAAAAAAAAAAAAAXaOCs1NcWvHk2Tm8Mt4nL3bXp4Rnet9kuY1+nmyUFqdV3rI01eEY8HM0t1us10dTOUXB2cwT5UfVHZho7bJylKNddTfCS7US2Zz6R1ePmqZ6LT196x59up5XoU08aanHnOKybfkYw5hKUceKf7GXT6q61yUIuW147cccHVzOfmOZvVnxeVFmghGmUXB1t/qik0Z9HpdTVN/L6iS8lF8P7nST7WdWpcdF+kstnTYkowU5PptM6/R3rL2ptV62CqtlxGyK7Mn6lNkJVycZrDXgW67dTSvjW8N4UW84Iyn8bSae595xw354ONx3iqgASWAAAAAAAAAAAAAAAAAAAAAAAAC/RvF8X6FBZpmo3Rb9jvH7Rzv9alp9E9J+K/GqinprW5Npcwl5N+XJ1q7JTTmuUuMLo/qVVNKXa6YxjzJ7oQszFd5JPH+z1dePTx22rFP8xwa546dTPrLKtIpXtYT5nz7L9y1KcZK2U4J+KS/chOMLYv40YWNtNR3ccdB8uf6zPUq2ezeqku9nr/AMKdTqdBpYtu5Rmunw5Zk/cxWfg19monZ8xCndLdiDlJ8+vBdR+CaSD33uy+Wedzwn9uTiTd/i3+J6rAvmPxjVZqTVcViVk1xFHX1MIwoqrhlQh2V9jSksRqrjGKXSKWEl7Hso11P822Kfryb+PifLO/N9OWDpuELINxcZx9DBfX8Oz0fKI78fWcr48na8KwASUAAAAAAAAAAAAAAAAAAAAAAZxj0eQDT26Vc98FNeJMwae74bxLuM3JppNPhnsxuajx+TFzUsvGMnh4DtMLW/yY/wBzKic32IxXgn1NFe6UN23HPjnoZNRGU59mM3FeOOpbK2FfeT3eJ585H+iX3JbubOLVcZ1LzI90Vc65ScspNY256lWskviKPikJ6qUk1FbfXxM+W+X1Ib3OvXK2M67dqAAmqAAwAAAAAAAAAAAAAAAAAAAAAAnXbOruvjyIA2Wz0yyX22R1cf1pr1RP5mn+v/BgBWebUT/DlueqqXR59kU26ucuI8Lz8TODL5dVs8WYN5fIAJqAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/9k="
                alt=""
              />
              The best for every budget
            </div>
            <p>Find high-quality services at every price point. No hourly rates, just project-based pricing.</p>
            <div className="title">
              <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIMA6QMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAgMEBQEH/8QAMBAAAgIBAwEGBAUFAAAAAAAAAAECAxEEEiExIjJBUWFxExSBkQUjQsHwUnKhseH/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAwECBAX/xAAgEQEBAQACAgIDAQAAAAAAAAAAAQIREgMxIVETMkEi/9oADAMBAAIRAxEAPwD6CAD5L64AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQAHoYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZ5auuNzpxLesY9crP8+nmjQThVZY+xGTz5Gycst4ZlfupVka7eWlhxafXy8iiOo1TinPSWbtiyuF2jpz02zm62qvz3TI40vjrqPo8nfSue+WPV3WadSnGnfWoNuW7GMFa1k42RU6ZbbLNtcsrx+vpn2OiqqbOIarTzz4bjyeltik5V7lHlNYa9zLmxvafbJdqPgy2ui5xxxKuG7+eH3Ix1sJTsjFSaj3ZY73t90ac85Q6rk5dQx6/QAAAAYAAAAAAAAAAAAAAAAAAAAAAAXaOCs1NcWvHk2Tm8Mt4nL3bXp4Rnet9kuY1+nmyUFqdV3rI01eEY8HM0t1us10dTOUXB2cwT5UfVHZho7bJylKNddTfCS7US2Zz6R1ePmqZ6LT196x59up5XoU08aanHnOKybfkYw5hKUceKf7GXT6q61yUIuW147cccHVzOfmOZvVnxeVFmghGmUXB1t/qik0Z9HpdTVN/L6iS8lF8P7nST7WdWpcdF+kstnTYkowU5PptM6/R3rL2ptV62CqtlxGyK7Mn6lNkJVycZrDXgW67dTSvjW8N4UW84Iyn8bSae595xw354ONx3iqgASWAAAAAAAAAAAAAAAAAAAAAAAAC/RvF8X6FBZpmo3Rb9jvH7Rzv9alp9E9J+K/GqinprW5Npcwl5N+XJ1q7JTTmuUuMLo/qVVNKXa6YxjzJ7oQszFd5JPH+z1dePTx22rFP8xwa546dTPrLKtIpXtYT5nz7L9y1KcZK2U4J+KS/chOMLYv40YWNtNR3ccdB8uf6zPUq2ezeqku9nr/AMKdTqdBpYtu5Rmunw5Zk/cxWfg19monZ8xCndLdiDlJ8+vBdR+CaSD33uy+Wedzwn9uTiTd/i3+J6rAvmPxjVZqTVcViVk1xFHX1MIwoqrhlQh2V9jSksRqrjGKXSKWEl7Hso11P822Kfryb+PifLO/N9OWDpuELINxcZx9DBfX8Oz0fKI78fWcr48na8KwASUAAAAAAAAAAAAAAAAAAAAAAZxj0eQDT26Vc98FNeJMwae74bxLuM3JppNPhnsxuajx+TFzUsvGMnh4DtMLW/yY/wBzKic32IxXgn1NFe6UN23HPjnoZNRGU59mM3FeOOpbK2FfeT3eJ585H+iX3JbubOLVcZ1LzI90Vc65ScspNY256lWskviKPikJ6qUk1FbfXxM+W+X1Ib3OvXK2M67dqAAmqAAwAAAAAAAAAAAAAAAAAAAAAAnXbOruvjyIA2Wz0yyX22R1cf1pr1RP5mn+v/BgBWebUT/DlueqqXR59kU26ucuI8Lz8TODL5dVs8WYN5fIAJqAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/9k="
                alt=""
              />
              Quality work done quickly
            </div>
            <p>Find the right freelancer to begin working on your project within minutes.</p>
            <div className="title">
              <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIMA6QMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAgMEBQEH/8QAMBAAAgIBAwEGBAUFAAAAAAAAAAECAxEEEiExIjJBUWFxExSBkQUjQsHwUnKhseH/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAwECBAX/xAAgEQEBAQACAgIDAQAAAAAAAAAAAQIREgMxIVETMkEi/9oADAMBAAIRAxEAPwD6CAD5L64AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQAHoYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZ5auuNzpxLesY9crP8+nmjQThVZY+xGTz5Gycst4ZlfupVka7eWlhxafXy8iiOo1TinPSWbtiyuF2jpz02zm62qvz3TI40vjrqPo8nfSue+WPV3WadSnGnfWoNuW7GMFa1k42RU6ZbbLNtcsrx+vpn2OiqqbOIarTzz4bjyeltik5V7lHlNYa9zLmxvafbJdqPgy2ui5xxxKuG7+eH3Ix1sJTsjFSaj3ZY73t90ac85Q6rk5dQx6/QAAAAYAAAAAAAAAAAAAAAAAAAAAAAXaOCs1NcWvHk2Tm8Mt4nL3bXp4Rnet9kuY1+nmyUFqdV3rI01eEY8HM0t1us10dTOUXB2cwT5UfVHZho7bJylKNddTfCS7US2Zz6R1ePmqZ6LT196x59up5XoU08aanHnOKybfkYw5hKUceKf7GXT6q61yUIuW147cccHVzOfmOZvVnxeVFmghGmUXB1t/qik0Z9HpdTVN/L6iS8lF8P7nST7WdWpcdF+kstnTYkowU5PptM6/R3rL2ptV62CqtlxGyK7Mn6lNkJVycZrDXgW67dTSvjW8N4UW84Iyn8bSae595xw354ONx3iqgASWAAAAAAAAAAAAAAAAAAAAAAAAC/RvF8X6FBZpmo3Rb9jvH7Rzv9alp9E9J+K/GqinprW5Npcwl5N+XJ1q7JTTmuUuMLo/qVVNKXa6YxjzJ7oQszFd5JPH+z1dePTx22rFP8xwa546dTPrLKtIpXtYT5nz7L9y1KcZK2U4J+KS/chOMLYv40YWNtNR3ccdB8uf6zPUq2ezeqku9nr/AMKdTqdBpYtu5Rmunw5Zk/cxWfg19monZ8xCndLdiDlJ8+vBdR+CaSD33uy+Wedzwn9uTiTd/i3+J6rAvmPxjVZqTVcViVk1xFHX1MIwoqrhlQh2V9jSksRqrjGKXSKWEl7Hso11P822Kfryb+PifLO/N9OWDpuELINxcZx9DBfX8Oz0fKI78fWcr48na8KwASUAAAAAAAAAAAAAAAAAAAAAAZxj0eQDT26Vc98FNeJMwae74bxLuM3JppNPhnsxuajx+TFzUsvGMnh4DtMLW/yY/wBzKic32IxXgn1NFe6UN23HPjnoZNRGU59mM3FeOOpbK2FfeT3eJ585H+iX3JbubOLVcZ1LzI90Vc65ScspNY256lWskviKPikJ6qUk1FbfXxM+W+X1Ib3OvXK2M67dqAAmqAAwAAAAAAAAAAAAAAAAAAAAAAnXbOruvjyIA2Wz0yyX22R1cf1pr1RP5mn+v/BgBWebUT/DlueqqXR59kU26ucuI8Lz8TODL5dVs8WYN5fIAJqAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/9k="
                alt=""
              />
              Protected payments, every time
            </div>
            <p>Always know what you will pay upfront. Your payment is not released until you approve the work.</p>
            <div className="title">
              <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIMA6QMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAgMEBQEH/8QAMBAAAgIBAwEGBAUFAAAAAAAAAAECAxEEEiExIjJBUWFxExSBkQUjQsHwUnKhseH/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAwECBAX/xAAgEQEBAQACAgIDAQAAAAAAAAAAAQIREgMxIVETMkEi/9oADAMBAAIRAxEAPwD6CAD5L64AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQAHoYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZ5auuNzpxLesY9crP8+nmjQThVZY+xGTz5Gycst4ZlfupVka7eWlhxafXy8iiOo1TinPSWbtiyuF2jpz02zm62qvz3TI40vjrqPo8nfSue+WPV3WadSnGnfWoNuW7GMFa1k42RU6ZbbLNtcsrx+vpn2OiqqbOIarTzz4bjyeltik5V7lHlNYa9zLmxvafbJdqPgy2ui5xxxKuG7+eH3Ix1sJTsjFSaj3ZY73t90ac85Q6rk5dQx6/QAAAAYAAAAAAAAAAAAAAAAAAAAAAAXaOCs1NcWvHk2Tm8Mt4nL3bXp4Rnet9kuY1+nmyUFqdV3rI01eEY8HM0t1us10dTOUXB2cwT5UfVHZho7bJylKNddTfCS7US2Zz6R1ePmqZ6LT196x59up5XoU08aanHnOKybfkYw5hKUceKf7GXT6q61yUIuW147cccHVzOfmOZvVnxeVFmghGmUXB1t/qik0Z9HpdTVN/L6iS8lF8P7nST7WdWpcdF+kstnTYkowU5PptM6/R3rL2ptV62CqtlxGyK7Mn6lNkJVycZrDXgW67dTSvjW8N4UW84Iyn8bSae595xw354ONx3iqgASWAAAAAAAAAAAAAAAAAAAAAAAAC/RvF8X6FBZpmo3Rb9jvH7Rzv9alp9E9J+K/GqinprW5Npcwl5N+XJ1q7JTTmuUuMLo/qVVNKXa6YxjzJ7oQszFd5JPH+z1dePTx22rFP8xwa546dTPrLKtIpXtYT5nz7L9y1KcZK2U4J+KS/chOMLYv40YWNtNR3ccdB8uf6zPUq2ezeqku9nr/AMKdTqdBpYtu5Rmunw5Zk/cxWfg19monZ8xCndLdiDlJ8+vBdR+CaSD33uy+Wedzwn9uTiTd/i3+J6rAvmPxjVZqTVcViVk1xFHX1MIwoqrhlQh2V9jSksRqrjGKXSKWEl7Hso11P822Kfryb+PifLO/N9OWDpuELINxcZx9DBfX8Oz0fKI78fWcr48na8KwASUAAAAAAAAAAAAAAAAAAAAAAZxj0eQDT26Vc98FNeJMwae74bxLuM3JppNPhnsxuajx+TFzUsvGMnh4DtMLW/yY/wBzKic32IxXgn1NFe6UN23HPjnoZNRGU59mM3FeOOpbK2FfeT3eJ585H+iX3JbubOLVcZ1LzI90Vc65ScspNY256lWskviKPikJ6qUk1FbfXxM+W+X1Ib3OvXK2M67dqAAmqAAwAAAAAAAAAAAAAAAAAAAAAAnXbOruvjyIA2Wz0yyX22R1cf1pr1RP5mn+v/BgBWebUT/DlueqqXR59kU26ucuI8Lz8TODL5dVs8WYN5fIAJqAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/9k="
                alt=""
              />
              24/7 support
            </div>
            <p>Find high-quality services at every price point. No hourly rates, just project-based pricing.</p>
          </div>
          <div className="item">
            <video src="./img/video.mp4" controls />
          </div>
        </div>
      </div>
      <div className="explore">
        <div className="container">
          <h1>Explore the marketplace</h1>
          <div className="items">
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Graphics & Design</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg"
                alt=""
              />
              <div className="line"></div>

              <span>Digital Marketing</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Writing & Translation</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Video & Animation</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Music & Audio</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Programming & Tech</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Business</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Lifestyle</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Data</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/photography.01cf943.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Photography</span>
            </div>
          </div>
        </div>
      </div>
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>
              liverr <i>business</i>
            </h1>
            <h1>
              A business solution designed for <i>teams</i>
            </h1>
            <p>Upgrade to a curated experience packed with tools and benefits, dedicated to businesses</p>
            <div className="title">
              <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIMA6QMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAgMEBQEH/8QAMBAAAgIBAwEGBAUFAAAAAAAAAAECAxEEEiExIjJBUWFxExSBkQUjQsHwUnKhseH/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAwECBAX/xAAgEQEBAQACAgIDAQAAAAAAAAAAAQIREgMxIVETMkEi/9oADAMBAAIRAxEAPwD6CAD5L64AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQAHoYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZ5auuNzpxLesY9crP8+nmjQThVZY+xGTz5Gycst4ZlfupVka7eWlhxafXy8iiOo1TinPSWbtiyuF2jpz02zm62qvz3TI40vjrqPo8nfSue+WPV3WadSnGnfWoNuW7GMFa1k42RU6ZbbLNtcsrx+vpn2OiqqbOIarTzz4bjyeltik5V7lHlNYa9zLmxvafbJdqPgy2ui5xxxKuG7+eH3Ix1sJTsjFSaj3ZY73t90ac85Q6rk5dQx6/QAAAAYAAAAAAAAAAAAAAAAAAAAAAAXaOCs1NcWvHk2Tm8Mt4nL3bXp4Rnet9kuY1+nmyUFqdV3rI01eEY8HM0t1us10dTOUXB2cwT5UfVHZho7bJylKNddTfCS7US2Zz6R1ePmqZ6LT196x59up5XoU08aanHnOKybfkYw5hKUceKf7GXT6q61yUIuW147cccHVzOfmOZvVnxeVFmghGmUXB1t/qik0Z9HpdTVN/L6iS8lF8P7nST7WdWpcdF+kstnTYkowU5PptM6/R3rL2ptV62CqtlxGyK7Mn6lNkJVycZrDXgW67dTSvjW8N4UW84Iyn8bSae595xw354ONx3iqgASWAAAAAAAAAAAAAAAAAAAAAAAAC/RvF8X6FBZpmo3Rb9jvH7Rzv9alp9E9J+K/GqinprW5Npcwl5N+XJ1q7JTTmuUuMLo/qVVNKXa6YxjzJ7oQszFd5JPH+z1dePTx22rFP8xwa546dTPrLKtIpXtYT5nz7L9y1KcZK2U4J+KS/chOMLYv40YWNtNR3ccdB8uf6zPUq2ezeqku9nr/AMKdTqdBpYtu5Rmunw5Zk/cxWfg19monZ8xCndLdiDlJ8+vBdR+CaSD33uy+Wedzwn9uTiTd/i3+J6rAvmPxjVZqTVcViVk1xFHX1MIwoqrhlQh2V9jSksRqrjGKXSKWEl7Hso11P822Kfryb+PifLO/N9OWDpuELINxcZx9DBfX8Oz0fKI78fWcr48na8KwASUAAAAAAAAAAAAAAAAAAAAAAZxj0eQDT26Vc98FNeJMwae74bxLuM3JppNPhnsxuajx+TFzUsvGMnh4DtMLW/yY/wBzKic32IxXgn1NFe6UN23HPjnoZNRGU59mM3FeOOpbK2FfeT3eJ585H+iX3JbubOLVcZ1LzI90Vc65ScspNY256lWskviKPikJ6qUk1FbfXxM+W+X1Ib3OvXK2M67dqAAmqAAwAAAAAAAAAAAAAAAAAAAAAAnXbOruvjyIA2Wz0yyX22R1cf1pr1RP5mn+v/BgBWebUT/DlueqqXR59kU26ucuI8Lz8TODL5dVs8WYN5fIAJqAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/9k="
                alt=""
              />
              Connect to freelancers with proven business experience
            </div>

            <div className="title">
              <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIMA6QMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAgMEBQEH/8QAMBAAAgIBAwEGBAUFAAAAAAAAAAECAxEEEiExIjJBUWFxExSBkQUjQsHwUnKhseH/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAwECBAX/xAAgEQEBAQACAgIDAQAAAAAAAAAAAQIREgMxIVETMkEi/9oADAMBAAIRAxEAPwD6CAD5L64AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQAHoYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZ5auuNzpxLesY9crP8+nmjQThVZY+xGTz5Gycst4ZlfupVka7eWlhxafXy8iiOo1TinPSWbtiyuF2jpz02zm62qvz3TI40vjrqPo8nfSue+WPV3WadSnGnfWoNuW7GMFa1k42RU6ZbbLNtcsrx+vpn2OiqqbOIarTzz4bjyeltik5V7lHlNYa9zLmxvafbJdqPgy2ui5xxxKuG7+eH3Ix1sJTsjFSaj3ZY73t90ac85Q6rk5dQx6/QAAAAYAAAAAAAAAAAAAAAAAAAAAAAXaOCs1NcWvHk2Tm8Mt4nL3bXp4Rnet9kuY1+nmyUFqdV3rI01eEY8HM0t1us10dTOUXB2cwT5UfVHZho7bJylKNddTfCS7US2Zz6R1ePmqZ6LT196x59up5XoU08aanHnOKybfkYw5hKUceKf7GXT6q61yUIuW147cccHVzOfmOZvVnxeVFmghGmUXB1t/qik0Z9HpdTVN/L6iS8lF8P7nST7WdWpcdF+kstnTYkowU5PptM6/R3rL2ptV62CqtlxGyK7Mn6lNkJVycZrDXgW67dTSvjW8N4UW84Iyn8bSae595xw354ONx3iqgASWAAAAAAAAAAAAAAAAAAAAAAAAC/RvF8X6FBZpmo3Rb9jvH7Rzv9alp9E9J+K/GqinprW5Npcwl5N+XJ1q7JTTmuUuMLo/qVVNKXa6YxjzJ7oQszFd5JPH+z1dePTx22rFP8xwa546dTPrLKtIpXtYT5nz7L9y1KcZK2U4J+KS/chOMLYv40YWNtNR3ccdB8uf6zPUq2ezeqku9nr/AMKdTqdBpYtu5Rmunw5Zk/cxWfg19monZ8xCndLdiDlJ8+vBdR+CaSD33uy+Wedzwn9uTiTd/i3+J6rAvmPxjVZqTVcViVk1xFHX1MIwoqrhlQh2V9jSksRqrjGKXSKWEl7Hso11P822Kfryb+PifLO/N9OWDpuELINxcZx9DBfX8Oz0fKI78fWcr48na8KwASUAAAAAAAAAAAAAAAAAAAAAAZxj0eQDT26Vc98FNeJMwae74bxLuM3JppNPhnsxuajx+TFzUsvGMnh4DtMLW/yY/wBzKic32IxXgn1NFe6UN23HPjnoZNRGU59mM3FeOOpbK2FfeT3eJ585H+iX3JbubOLVcZ1LzI90Vc65ScspNY256lWskviKPikJ6qUk1FbfXxM+W+X1Ib3OvXK2M67dqAAmqAAwAAAAAAAAAAAAAAAAAAAAAAnXbOruvjyIA2Wz0yyX22R1cf1pr1RP5mn+v/BgBWebUT/DlueqqXR59kU26ucuI8Lz8TODL5dVs8WYN5fIAJqAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/9k="
                alt=""
              />
              Get matched with the perfect talent by a customer success manager
            </div>

            <div className="title">
              <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIMA6QMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAgMEBQEH/8QAMBAAAgIBAwEGBAUFAAAAAAAAAAECAxEEEiExIjJBUWFxExSBkQUjQsHwUnKhseH/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAwECBAX/xAAgEQEBAQACAgIDAQAAAAAAAAAAAQIREgMxIVETMkEi/9oADAMBAAIRAxEAPwD6CAD5L64AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQAHoYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZ5auuNzpxLesY9crP8+nmjQThVZY+xGTz5Gycst4ZlfupVka7eWlhxafXy8iiOo1TinPSWbtiyuF2jpz02zm62qvz3TI40vjrqPo8nfSue+WPV3WadSnGnfWoNuW7GMFa1k42RU6ZbbLNtcsrx+vpn2OiqqbOIarTzz4bjyeltik5V7lHlNYa9zLmxvafbJdqPgy2ui5xxxKuG7+eH3Ix1sJTsjFSaj3ZY73t90ac85Q6rk5dQx6/QAAAAYAAAAAAAAAAAAAAAAAAAAAAAXaOCs1NcWvHk2Tm8Mt4nL3bXp4Rnet9kuY1+nmyUFqdV3rI01eEY8HM0t1us10dTOUXB2cwT5UfVHZho7bJylKNddTfCS7US2Zz6R1ePmqZ6LT196x59up5XoU08aanHnOKybfkYw5hKUceKf7GXT6q61yUIuW147cccHVzOfmOZvVnxeVFmghGmUXB1t/qik0Z9HpdTVN/L6iS8lF8P7nST7WdWpcdF+kstnTYkowU5PptM6/R3rL2ptV62CqtlxGyK7Mn6lNkJVycZrDXgW67dTSvjW8N4UW84Iyn8bSae595xw354ONx3iqgASWAAAAAAAAAAAAAAAAAAAAAAAAC/RvF8X6FBZpmo3Rb9jvH7Rzv9alp9E9J+K/GqinprW5Npcwl5N+XJ1q7JTTmuUuMLo/qVVNKXa6YxjzJ7oQszFd5JPH+z1dePTx22rFP8xwa546dTPrLKtIpXtYT5nz7L9y1KcZK2U4J+KS/chOMLYv40YWNtNR3ccdB8uf6zPUq2ezeqku9nr/AMKdTqdBpYtu5Rmunw5Zk/cxWfg19monZ8xCndLdiDlJ8+vBdR+CaSD33uy+Wedzwn9uTiTd/i3+J6rAvmPxjVZqTVcViVk1xFHX1MIwoqrhlQh2V9jSksRqrjGKXSKWEl7Hso11P822Kfryb+PifLO/N9OWDpuELINxcZx9DBfX8Oz0fKI78fWcr48na8KwASUAAAAAAAAAAAAAAAAAAAAAAZxj0eQDT26Vc98FNeJMwae74bxLuM3JppNPhnsxuajx+TFzUsvGMnh4DtMLW/yY/wBzKic32IxXgn1NFe6UN23HPjnoZNRGU59mM3FeOOpbK2FfeT3eJ585H+iX3JbubOLVcZ1LzI90Vc65ScspNY256lWskviKPikJ6qUk1FbfXxM+W+X1Ib3OvXK2M67dqAAmqAAwAAAAAAAAAAAAAAAAAAAAAAnXbOruvjyIA2Wz0yyX22R1cf1pr1RP5mn+v/BgBWebUT/DlueqqXR59kU26ucuI8Lz8TODL5dVs8WYN5fIAJqAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/9k="
                alt=""
              />
              Manage teamwork and boost productivity with one powerful workspace
            </div>
            <button>Explore Liverr Business</button>
          </div>
          <div className="item">
            <img
            className="img-dark"
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIMA6QMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAgMEBQEH/8QAMBAAAgIBAwEGBAUFAAAAAAAAAAECAxEEEiExIjJBUWFxExSBkQUjQsHwUnKhseH/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAwECBAX/xAAgEQEBAQACAgIDAQAAAAAAAAAAAQIREgMxIVETMkEi/9oADAMBAAIRAxEAPwD6CAD5L64AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQAHoYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZ5auuNzpxLesY9crP8+nmjQThVZY+xGTz5Gycst4ZlfupVka7eWlhxafXy8iiOo1TinPSWbtiyuF2jpz02zm62qvz3TI40vjrqPo8nfSue+WPV3WadSnGnfWoNuW7GMFa1k42RU6ZbbLNtcsrx+vpn2OiqqbOIarTzz4bjyeltik5V7lHlNYa9zLmxvafbJdqPgy2ui5xxxKuG7+eH3Ix1sJTsjFSaj3ZY73t90ac85Q6rk5dQx6/QAAAAYAAAAAAAAAAAAAAAAAAAAAAAXaOCs1NcWvHk2Tm8Mt4nL3bXp4Rnet9kuY1+nmyUFqdV3rI01eEY8HM0t1us10dTOUXB2cwT5UfVHZho7bJylKNddTfCS7US2Zz6R1ePmqZ6LT196x59up5XoU08aanHnOKybfkYw5hKUceKf7GXT6q61yUIuW147cccHVzOfmOZvVnxeVFmghGmUXB1t/qik0Z9HpdTVN/L6iS8lF8P7nST7WdWpcdF+kstnTYkowU5PptM6/R3rL2ptV62CqtlxGyK7Mn6lNkJVycZrDXgW67dTSvjW8N4UW84Iyn8bSae595xw354ONx3iqgASWAAAAAAAAAAAAAAAAAAAAAAAAC/RvF8X6FBZpmo3Rb9jvH7Rzv9alp9E9J+K/GqinprW5Npcwl5N+XJ1q7JTTmuUuMLo/qVVNKXa6YxjzJ7oQszFd5JPH+z1dePTx22rFP8xwa546dTPrLKtIpXtYT5nz7L9y1KcZK2U4J+KS/chOMLYv40YWNtNR3ccdB8uf6zPUq2ezeqku9nr/AMKdTqdBpYtu5Rmunw5Zk/cxWfg19monZ8xCndLdiDlJ8+vBdR+CaSD33uy+Wedzwn9uTiTd/i3+J6rAvmPxjVZqTVcViVk1xFHX1MIwoqrhlQh2V9jSksRqrjGKXSKWEl7Hso11P822Kfryb+PifLO/N9OWDpuELINxcZx9DBfX8Oz0fKI78fWcr48na8KwASUAAAAAAAAAAAAAAAAAAAAAAZxj0eQDT26Vc98FNeJMwae74bxLuM3JppNPhnsxuajx+TFzUsvGMnh4DtMLW/yY/wBzKic32IxXgn1NFe6UN23HPjnoZNRGU59mM3FeOOpbK2FfeT3eJ585H+iX3JbubOLVcZ1LzI90Vc65ScspNY256lWskviKPikJ6qUk1FbfXxM+W+X1Ib3OvXK2M67dqAAmqAAwAAAAAAAAAAAAAAAAAAAAAAnXbOruvjyIA2Wz0yyX22R1cf1pr1RP5mn+v/BgBWebUT/DlueqqXR59kU26ucuI8Lz8TODL5dVs8WYN5fIAJqAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/9k="
              alt=""
            />
          </div>
        </div>
      </div>
      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((project) => (
          <ProjectCard key={project.id} card={project} />
        ))}
      </Slide>
    </div>
  );
};

export default Home;
