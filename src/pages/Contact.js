import React from 'react';
import styled from 'styled-components';
import contactHero from "../assets/contact.png" 
import {FaFacebookSquare, FaInstagram} from 'react-icons/fa';

const Contact = () => {
  return (
    <Wrapper>
      <section className="connect">
        <img className="video-container" src={contactHero} alt="contact" />
        <div className="video-banner">
          <div className="section-title">
            <h2>let's get in touch</h2>
            <div className="underline"></div>
          </div>
          <div>
            <span> LIBERZEN</span>
            <h5>T : 02-2254-2361</h5>
            <h5>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/Liberzen/?ref=nf&hc_ref=ARSUhTBLxKht4m1rAoNEy8wIGe0d_vvtd99aVgyJ31CY6nDFRfsuJOipFv39oN8aEP0&__tn__=%3C-R"
              >
                <FaFacebookSquare className="navbar-info_icon facebook" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/liberzen/"
              >
                <FaInstagram className="navbar-info_icon insta" />
              </a>
            </h5>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 100vh;
  margin-top: 50px;
  color: black;

  .underline {
    width: 8rem;
    height: 0.25rem;
    margin: 2rem auto 2rem auto;
    background: black;
  }
  div {
    letter-spacing: 0.2rem;
  }
  span {
    font-weight: bold;
    letter-spacing: 0.4rem;
    margin: 0;
    font-size: 2.5rem;
  }
  h5 {
    margin: 1rem;
    font-weight: 400;
    font-size: 1.8rem;
    text-transform: none;
    line-height: 1.25;
  }
  a {
    margin: 5px;
    font-size: 2.3rem;
    color: black;
    &:hover .facebook,
    &:hover .insta {
      transform: scale(0.96);
      opacity: 0.7;
    }
  }
  .video-banner {
    padding: 1rem;
    h5,
    span {
      font-size: 1rem;
    }
    h2 {
      font-size: 1.5rem;
    }
  }
  /* contact */

.connect {
  min-height: 80vh;
  position: relative;
  padding: 10rem 0 5rem 0;
  margin: 5rem 0;
}
.video-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  z-index: -2;
  opacity: 0.8;
}
.connect::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.7;
  z-index: -1;
}
.connect {
  display: grid;
  place-items: center;
}
.video-banner .section-title {
  margin-bottom: 2rem;
}
.video-text {
  max-width: 30rem;
}
.video-banner {
  background: #f4f3ee;
  text-align: center;
  border-radius: 10px;
}
.connect {
  -webkit-clip-path: polygon(
    50% 0%,
    100% 10%,
    100% 90%,
    50% 100%,
    0 90%,
    0 10%
  );
  clip-path: polygon(50% 0%, 100% 10%, 100% 90%, 50% 100%, 0 90%, 0 10%);
}
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    /* grid-template-columns: 1fr 1fr;
    gap: 8rem; */
    .video-banner {
      padding: 3rem 5rem 3rem 5rem;
      h5,
      span {
        font-size: 2.2rem;
      }
      h2 {
        font-size: 2.5rem;
      }
    }
  }
`;
export default Contact;