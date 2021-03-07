import React from "react";
import { Helmet } from "react-helmet";
import { css } from "@emotion/core";

import { Footer } from "../components/Footer";
import SiteNav from "../components/header/SiteNav";
import { PostFullContent } from "../components/PostContent";
import { Wrapper } from "../components/Wrapper";
import IndexLayout from "../layouts";
import {
  inner,
  outer,
  SiteArchiveHeader,
  SiteHeader,
  SiteMain,
  SiteNavMain,
} from "../styles/shared";
import { NoImage, PostFull, PostFullHeader, PostFullTitle } from "../templates/post";
import { colors } from "../styles/colors";

const PageTemplate = css`
  .site-main {
    margin-top: 64px;
    padding-bottom: 4vw;
    background: #fff;
  }

  @media (prefers-color-scheme: dark) {
    .site-main {
      /* background: var(--darkmode); */
      background: ${colors.darkmode};
    }
  }
`;

const About: React.FC = () => (
  <IndexLayout>
    <Helmet key="about-helmet">
      <title>About</title>
    </Helmet>
    <Wrapper css={PageTemplate} key="about-wrapper">
      <header className="site-archive-header no-image" css={[SiteHeader, SiteArchiveHeader]}>
        <div css={[outer, SiteNavMain]}>
          <div css={inner}>
            <SiteNav isHome={false} />
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <div css={inner}>
          <article className="post page" css={[PostFull, NoImage]}>
            <PostFullHeader className="post-full-header" key="post-full-header">
              <PostFullTitle className="post-full-title">About</PostFullTitle>
            </PostFullHeader>

            <PostFullContent className="post-full-content" key="post-full-content">
              <div className="post-content">
                <p>
                  I&apos;m a front-end developer at the <a href="http://www.nypl.org">New York Public Library</a>{" "}
                  in the Digital Experience department. My current projects focus on using Python, Node.js, and React,
                  but Rails, Angularjs, and Drupal are also in the mix sometimes.
                </p>
                <p>When not sitting or standing in front of a computer I enjoy reading, eating, cooking, cycling, and running.
                  My friends and I co-founded <a href="https://qdrunners.org">Queens Distance Runners</a> and I began to get serious about running in 2014.
                  My current goals include getting faster at short distances and a better marathon time. My future goals include
                  running 100 mile ultramarathons and maybe a triathlon.
                </p>
                <p>Personal Bests</p>
                <ul>
                  <li>1 mile - 4:56 at NYRR 5th Avenue Mile 2016</li>
                  <li>5K - 16:55 at a track time trial with Lone Wolf Track Club 2020</li>
                  <li>10K - 34:55 at a track time trial with Lone Wolf Track Club 2020</li>
                  <li>Half Marathon - 1:17:32 at NYRR United Airlines NYC Half 2019</li>
                  <li>Marathon - 2:49:15 at the TCS NYC Marathon 2019</li>
                  <li>60K - 4:37:41 at the NYRR NYC 60K 2015 and 6th place overall</li>
                </ul>

                <p>Follow me on most social media platforms</p>
                <blockquote className="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Running and Reading into the NYC Marathon - my first <a href="https://twitter.com/hashtag/running?src=hash">#running</a> blog post for <a href="https://twitter.com/nypl">@nypl</a> ! <a href="https://twitter.com/hashtag/nypl?src=hash">#nypl</a> <a href="https://twitter.com/hashtag/nycmarathon?src=hash">#nycmarathon</a> <a href="http://t.co/dR5nVBKFuY">http://t.co/dR5nVBKFuY</a></p>&mdash; Edwin Guzman (@edwingzmn) <a href="https://twitter.com/edwingzmn/status/646394422947672064">September 22, 2015</a></blockquote>
                <script async src="//platform.twitter.com/widgets.js" charSet="utf-8" />
              </div>
            </PostFullContent>
          </article>
        </div>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
