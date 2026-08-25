import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Home } from "@/pages/Home";
import { Physics } from "@/pages/Physics";
import { Mathematics } from "@/pages/Mathematics";
import { Computation } from "@/pages/Computation";
import { ResearchIndex } from "@/pages/ResearchIndex";
import { ResearchDetail } from "@/pages/ResearchDetail";
import { ProjectsIndex } from "@/pages/ProjectsIndex";
import { ProjectDetail } from "@/pages/ProjectDetail";
import { NotesIndex } from "@/pages/NotesIndex";
import { NoteDetail } from "@/pages/NoteDetail";
import { Resume } from "@/pages/Resume";
import { About } from "@/pages/About";
import { Contact } from "@/pages/Contact";
import { NotFound } from "@/pages/NotFound";
import { ScrollToTop } from "@/components/layout/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="physics" element={<Physics />} />
          <Route path="mathematics" element={<Mathematics />} />
          <Route path="computation" element={<Computation />} />
          <Route path="research" element={<ResearchIndex />} />
          <Route path="research/:id" element={<ResearchDetail />} />
          <Route path="projects" element={<ProjectsIndex />} />
          <Route path="projects/:id" element={<ProjectDetail />} />
          <Route path="notes" element={<NotesIndex />} />
          <Route path="notes/:id" element={<NoteDetail />} />
          <Route path="resume" element={<Resume />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
