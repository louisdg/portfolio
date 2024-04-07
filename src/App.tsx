import styles from "./App.module.css";
import colors from "./colors";
import Footer from "./components/footer/Footer";
import MainContent from "./components/main-content/MainContent";
import AnimatedBackground from "./components/util/AnimatedBackground";
import BackToTop from "./components/util/BackToTop";

function App() {
  return (
    <div
      className={styles.App}
      style={{
        background:
          `radial-gradient(1000px at 0% 0%, ${colors["purple/50%"]}, transparent 100%) fixed` +
          `, radial-gradient(750px at 100% 100%, ${colors["lavender/25%"]}, transparent 100%) fixed`,
      }}
    >
      <AnimatedBackground>
        <MainContent />
        <Footer />
        <BackToTop />
      </AnimatedBackground>
    </div>
  );
}

export default App;
