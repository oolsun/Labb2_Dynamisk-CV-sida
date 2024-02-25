import CertDisplay from "../components/CertDisplay";
import EduDisplay from "../components/EduDisplay";
import JobsDisplay from "../components/JobsDisplay";
import KnowledgeDisplay from "../components/KnowledgeDisplay";
import "../style.css";

export default function CV() {
  return (
    <main>
      <section class="container-box">
        <div class="container">
          <div class="flip-box">
            <div class="flip-box-inner">
              <div class="flip-box-front">
                <h2>Arbetslivserfarenhet</h2>
              </div>
              <div class="flip-box-back">
                <JobsDisplay />
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="flip-box">
            <div class="flip-box-inner">
              <div class="flip-box-front">
                <h2>Utbildningar</h2>
              </div>
              <div class="flip-box-back">
                <EduDisplay />
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="flip-box">
            <div class="flip-box-inner">
              <div class="flip-box-front">
                <h2>Certifikat och övriga kurser</h2>
              </div>
              <div class="flip-box-back">
                <CertDisplay />
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="flip-box">
            <div class="flip-box-inner">
              <div class="flip-box-front">
                <h2>Övrigt</h2>
              </div>
              <div class="flip-box-back">
                <KnowledgeDisplay />
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
    </main>
  );
}
