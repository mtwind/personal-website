import MyInfo from "@/components/about/MyInfo"; // Adjust this import path as needed
import { Stack, Typography } from "@mui/material";
import React from "react";

export default function AboutPage() {
  return (
    <Stack spacing={4} sx={{ padding: { xs: 2, md: 4 } }}>
      <Typography variant="h2" component="h1" gutterBottom align="center">
        About Me
      </Typography>

      {/* Intro */}
      <MyInfo
        id="intro"
        textPosition="left"
        images={[
          "/about/intro/headshot-1.jpg",
          "/about/intro/chicago-river-1.jpg",
          "/about/intro/rising-professional-headshot.jpg",
          "/about/intro/chicago.png",
        ]}
        description={
          <React.Fragment>
            <Typography
              variant="h6"
              component="h3"
              sx={{ fontWeight: "bold", mb: 1 }}
            >
              Intro
            </Typography>
            <Typography variant="body1" component="p">
              Hi, fortunately, I&apos;m not only a software engineer. Outside of
              work/school, I have a range of different hobbies. I enjoy
              playing/watching sports, strategy games, traveling, and much more.
              Read about my life beyond work below!
            </Typography>
          </React.Fragment>
        }
      />

      {/* Sports */}
      <MyInfo
        id="sports"
        textPosition="right"
        images={[
          "/about/sports/chelsea-1.jpg",
          "/about/sports/barca.jpg",
          "/about/sports/psg.jpg",
          "/about/sports/allianz-arena.jpg",
          "/about/sports/stamford-bridge.png",
          "/about/sports/purdue-football.jpg",
          "/about/sports/san-siro-2.jpg",
        ]}
        description={
          <React.Fragment>
            <Typography
              variant="h6"
              component="h3"
              sx={{ fontWeight: "bold", mb: 1 }}
            >
              Sports
            </Typography>
            <Typography variant="body1" component="p">
              Sports have always been something that have taken up a large chunk
              of my free time and that is totally still true today. I enjoy
              playing soccer, tennis, pickleball and golf, while also watching
              sports on a daily basis. I am a massive soccer fan, with my team
              being Chelsea FC. I was even fortunate enough to attend 3
              Champions League semi finals this season, which were some of the
              best experiences of my life. I also enjoy college sports and love
              to support Purdue. Boiler Up!
            </Typography>
          </React.Fragment>
        }
      />

      {/* Strategy */}
      <MyInfo
        id="strategy"
        textPosition="left"
        images={[
          "/about/strategy/poker.png",
          "/about/strategy/catan-2.jpg",
          "/about/strategy/risk.png",
        ]}
        description={
          <React.Fragment>
            <Typography
              variant="h6"
              component="h3"
              sx={{ fontWeight: "bold", mb: 1 }}
            >
              Strategy
            </Typography>
            <Typography variant="body1" component="p">
              I’m also a huge fan of anything strategy related. I love playing
              all types of strategy card, board, and video games. Some of my
              favorites include Poker, Catan, Hearts, Oh Hell, and Risk.{" "}
            </Typography>
          </React.Fragment>
        }
      />

      {/* Travel */}
      <MyInfo
        id="travel"
        textPosition="right"
        images={[
          "/about/travel/colosseum.jpg",
          "/about/travel/eiffel-tower.jpg",
          "/about/travel/kitzsteinhorn.jpg",
          "/about/travel/les-gets-4.jpg",
          "/about/travel/london.png",
          "/about/travel/neuschwanstein.png",
          "/about/travel/pompeii-2.jpg",
          "/about/travel/ski.png",
        ]}
        description={
          <React.Fragment>
            <Typography
              variant="h6"
              component="h3"
              sx={{ fontWeight: "bold", mb: 1 }}
            >
              Travel
            </Typography>
            <Typography variant="body1" component="p">
              Travelling is another huge part of my life as I love to adventure
              and experience new cultures. This spring, I was lucky enough to be
              able to study abroad in London and visited more than 10 different
              countries during my time in Europe! While nothing compares to my
              love for the city of London, I also had unforgettable trips to
              Vienna, Rome, Paris, Amsterdam, and many more amazing European
              cities.{" "}
            </Typography>
          </React.Fragment>
        }
      />

      {/* Volunteering */}
      <MyInfo
        id="volunteering"
        textPosition="left"
        images={[
          "/about/volunteering/habitat-zbt.jpg",
          "/about/volunteering/habitat-pensacola.jpg",
        ]}
        description={
          <React.Fragment>
            <Typography
              variant="h6"
              component="h3"
              sx={{ fontWeight: "bold", mb: 1 }}
            >
              Volunteering
            </Typography>
            <Typography variant="body1" component="p">
              As I’ve grown older, I’ve become more and more inclined to
              volunteer when possible. Throughout high school and college, I’ve
              volunteered at various different food drives, church camps,
              mission trips, and more. Last Spring, I went on an amazing mission
              trip to Pensacola, Florida, where I helped to build a house from
              the ground up with Habitat for Humanity.
            </Typography>
          </React.Fragment>
        }
      />

      {/* Extracurriculars */}
      <MyInfo
        id="extracurriculars"
        textPosition="right"
        images={[
          "/about/extracurriculars/akuna.jpg",
          "/about/extracurriculars/rising-professional-1.jpg",
          "/about/extracurriculars/old-mission.jpg",
          "/about/extracurriculars/rising-professional-2.jpg",
          "/about/extracurriculars/dv-trading.jpg",
        ]}
        description={
          <React.Fragment>
            <Typography
              variant="h6"
              component="h3"
              sx={{ fontWeight: "bold", mb: 1 }}
            >
              Extracurriculars
            </Typography>
            <Typography variant="body1" component="p">
              At Purdue, I’m involved in a few different extracurricular
              organizations that keep me on my toes, namely{" "}
              <strong>Boiler Quant Finance Group (BQFG)</strong>, Rising
              Professionals, and Greek Life. BQFG is Purdue’s premier
              quantitative trading club and I’ve learned so much about the quant
              trading industry while also having the opportunity to work on some
              awesome projects and meet brilliant people. Rising Professionals
              is a fantastic organization that prepares students like myself for
              a career and provides a network of successful young professionals.
            </Typography>
          </React.Fragment>
        }
      />

      {/* Zeta Beta Tau */}
      <MyInfo
        id="zeta-beta-tau"
        textPosition="left"
        images={["/about/zbt/zbt.png"]}
        description={
          <React.Fragment>
            <Typography
              variant="h6"
              component="h3"
              sx={{ fontWeight: "bold", mb: 1 }}
            >
              Zeta Beta Tau
            </Typography>
            <Typography variant="body1" component="p">
              At my fraternity, ZBT, I have met people that I already consider
              lifelong friends and have held important positions within the
              organization. This past year, I was selected to lead a new
              scholarship initiative called the ZBT Freshman of Excellence. In
              this role, I organized and conducted over 150 interviews in order
              to assure that we selected the absolute best candidate. The
              scholarship was so successful that our chapter decided to renew
              the scholarship with an even bigger budget. Additionally, I was
              awarded the <strong>FSCL Brother of the Year</strong> award for my
              leadership on the initiative, an award given out to a single
              brother within Greek Life. Before that, I was elected as the
              academic advisor for my chapter and played a huge role in boosting
              our chapters GPA by 5%.
            </Typography>
          </React.Fragment>
        }
      />

      {/* Education */}
      <MyInfo
        id="education"
        textPosition="right"
        images={["/about/education/purdue.png"]}
        description={
          <React.Fragment>
            <Typography
              variant="h6"
              component="h3"
              sx={{ fontWeight: "bold", mb: 1 }}
            >
              Education
            </Typography>
            <Typography variant="body1" component="p">
              While computer science and other STEM related topics are the most
              interesting to me, I truly do just love to learn about anything.
              At Purdue, I’m set to graduate with minors in both Finance and
              German as I hope to become the most well rounded learner I can be.
              My experience studying abroad in London has also helped me to
              widen my scope as I learned so much about different cultures and
              took courses that challenged the way I previously thought about
              various topics.{" "}
            </Typography>
          </React.Fragment>
        }
      />
    </Stack>
  );
}
