export default function NeuromorphicMap() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900 p-6 md:p-10">
      <div className="max-w-6xl mx-auto space-y-6">
        <header className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Neuromorphic Computing — Where it Sits, How to Enter</h1>
          <p className="text-sm text-gray-600">A high-level map of the AI landscape showing neuromorphic computing’s neighbourhood, with practical entry routes and milestones.</p>
        </header>

        {/* Legend */}
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="rounded-2xl border p-4 shadow-sm">
            <h2 className="font-semibold">Legend</h2>
            <ul className="mt-2 space-y-1 list-disc ml-5">
              <li><span className="font-medium">Blue boxes</span>: Major AI areas</li>
              <li><span className="font-medium">Purple boxes</span>: Neuromorphic core</li>
              <li><span className="font-medium">Green boxes</span>: Entry routes & tools</li>
              <li><span className="font-medium">Orange boxes</span>: Applications</li>
              <li><span className="font-medium">Arrows</span>: Typical progression or dependency</li>
            </ul>
          </div>
          <div className="rounded-2xl border p-4 shadow-sm">
            <h2 className="font-semibold">Assumed Baseline</h2>
            <p className="mt-2">Python, linear algebra, probability, signals & systems, basic ML (sklearn/PyTorch).</p>
          </div>
          <div className="rounded-2xl border p-4 shadow-sm">
            <h2 className="font-semibold">Your First Win</h2>
            <p className="mt-2">Train a small spiking model on event data (DVS gestures) and deploy a low-power demo on SBC/MCU.</p>
          </div>
        </div>

        {/* Map (SVG) */}
        <div className="rounded-2xl border p-4 shadow-sm overflow-x-auto bg-gray-50">
          <svg width="1400" height="820" viewBox="0 0 1400 820" className="mx-auto">
            {/* Styles */}
            <defs>
              <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.15" />
              </filter>
            </defs>

            {/* Helper function replacements are inlined: rectangles with labels */}
            {/* --- AI Landscape (left) --- */}
            <g>
              {/* Classical ML */}
              <rect x="40" y="60" width="260" height="90" rx="18" fill="#e6f0ff" stroke="#3b82f6" filter="url(#shadow)" />
              <text x="170" y="105" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1f2937">Classical ML</text>
              <text x="170" y="125" textAnchor="middle" fontSize="12" fill="#374151">SVMs · Trees · k-NN</text>

              {/* Deep Learning */}
              <rect x="40" y="180" width="260" height="110" rx="18" fill="#e6f0ff" stroke="#3b82f6" filter="url(#shadow)" />
              <text x="170" y="220" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1f2937">Deep Learning</text>
              <text x="170" y="240" textAnchor="middle" fontSize="12" fill="#374151">CNNs · RNNs · Transformers</text>

              {/* Foundation Models */}
              <rect x="40" y="320" width="260" height="110" rx="18" fill="#e6f0ff" stroke="#3b82f6" filter="url(#shadow)" />
              <text x="170" y="360" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1f2937">Foundation Models</text>
              <text x="170" y="380" textAnchor="middle" fontSize="12" fill="#374151">LLMs · Diffusion</text>

              {/* Efficient/Edge AI */}
              <rect x="40" y="460" width="260" height="110" rx="18" fill="#e6f0ff" stroke="#3b82f6" filter="url(#shadow)" />
              <text x="170" y="500" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1f2937">Efficient / Edge AI</text>
              <text x="170" y="520" textAnchor="middle" fontSize="12" fill="#374151">Quantisation · Pruning · TinyML</text>

              {/* Arrows toward neuromorphic */}
              <path d="M300,235 C360,235 380,235 460,235" stroke="#9ca3af" strokeWidth="2" markerEnd="url(#arrow)" fill="none" />
              <path d="M300,375 C360,375 380,375 460,375" stroke="#9ca3af" strokeWidth="2" markerEnd="url(#arrow)" fill="none" />
              <path d="M300,515 C360,515 380,515 460,515" stroke="#9ca3af" strokeWidth="2" markerEnd="url(#arrow)" fill="none" />
            </g>

            {/* Arrowhead marker */}
            <defs>
              <marker id="arrow" markerWidth="10" markerHeight="10" refX="10" refY="3" orient="auto" markerUnits="strokeWidth">
                <path d="M0,0 L10,3 L0,6 Z" fill="#9ca3af" />
              </marker>
            </defs>

            {/* --- Neuromorphic Core (centre) --- */}
            <g>
              <rect x="460" y="160" width="320" height="90" rx="18" fill="#ede9fe" stroke="#7c3aed" filter="url(#shadow)" />
              <text x="620" y="195" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1f2937">Neuromorphic Computing</text>
              <text x="620" y="215" textAnchor="middle" fontSize="12" fill="#374151">Event-driven · Asynchronous · In-memory compute</text>

              {/* SNNs */}
              <rect x="460" y="270" width="150" height="90" rx="16" fill="#ede9fe" stroke="#7c3aed" filter="url(#shadow)" />
              <text x="535" y="305" textAnchor="middle" fontWeight="700" fontSize="14" fill="#1f2937">SNNs</text>
              <text x="535" y="323" textAnchor="middle" fontSize="12" fill="#374151">Spikes · STDP</text>

              {/* Sensors */}
              <rect x="630" y="270" width="150" height="90" rx="16" fill="#ede9fe" stroke="#7c3aed" filter="url(#shadow)" />
              <text x="705" y="305" textAnchor="middle" fontWeight="700" fontSize="14" fill="#1f2937">Event Sensors</text>
              <text x="705" y="323" textAnchor="middle" fontSize="12" fill="#374151">DVS · Silicon cochlea</text>

              {/* Hardware */}
              <rect x="460" y="380" width="320" height="110" rx="18" fill="#ede9fe" stroke="#7c3aed" filter="url(#shadow)" />
              <text x="620" y="415" textAnchor="middle" fontWeight="700" fontSize="14" fill="#1f2937">Neuromorphic Hardware</text>
              <text x="620" y="435" textAnchor="middle" fontSize="12" fill="#374151">Intel Loihi 1/2 · Lava · Hala Point · SpiNNaker · BrainScaleS</text>

              {/* Methods */}
              <rect x="460" y="510" width="320" height="110" rx="18" fill="#ede9fe" stroke="#7c3aed" filter="url(#shadow)" />
              <text x="620" y="545" textAnchor="middle" fontWeight="700" fontSize="14" fill="#1f2937">Methods</text>
              <text x="620" y="565" textAnchor="middle" fontSize="12" fill="#374151">ANN→SNN conversion · Surrogate gradients · Local learning (STDP)</text>
            </g>

            {/* --- Entry Routes (right) --- */}
            <g>
              {/* Software-first */}
              <rect x="840" y="120" width="510" height="130" rx="18" fill="#ecfdf5" stroke="#10b981" filter="url(#shadow)" />
              <text x="1095" y="155" textAnchor="middle" fontWeight="700" fontSize="16" fill="#064e3b">Route A — Software-first</text>
              <text x="1095" y="175" textAnchor="middle" fontSize="12" fill="#065f46">Simulate spikes; deploy later</text>
              <text x="1095" y="195" textAnchor="middle" fontSize="12" fill="#065f46">Tools: Brian2 · Nengo · PyTorch+Norse · SpikingJelly</text>
              <text x="1095" y="215" textAnchor="middle" fontSize="12" fill="#065f46">Datasets: DVS Gestures · N-MNIST</text>

              {/* Hardware-first */}
              <rect x="840" y="280" width="510" height="130" rx="18" fill="#ecfdf5" stroke="#10b981" filter="url(#shadow)" />
              <text x="1095" y="315" textAnchor="middle" fontWeight="700" fontSize="16" fill="#064e3b">Route B — Hardware-first</text>
              <text x="1095" y="335" textAnchor="middle" fontSize="12" fill="#065f46">Access Loihi 2 (Lava), SpiNNaker, or BrainScaleS via programmes</text>
              <text x="1095" y="355" textAnchor="middle" fontSize="12" fill="#065f46">Build: event camera + MCU bridge → host</text>

              {/* Bio/Theory-first */}
              <rect x="840" y="440" width="510" height="130" rx="18" fill="#ecfdf5" stroke="#10b981" filter="url(#shadow)" />
              <text x="1095" y="475" textAnchor="middle" fontWeight="700" fontSize="16" fill="#064e3b">Route C — Bio/Theory-first</text>
              <text x="1095" y="495" textAnchor="middle" fontSize="12" fill="#065f46">Dynamical systems · Neuron models · Plasticity</text>
              <text x="1095" y="515" textAnchor="middle" fontSize="12" fill="#065f46">Textbook picks: Dayan & Abbott; Gerstner et al.</text>

              {/* You are here */}
              <rect x="980" y="610" width="240" height="70" rx="18" fill="#ecfdf5" stroke="#10b981" filter="url(#shadow)" />
              <text x="1100" y="640" textAnchor="middle" fontWeight="700" fontSize="14" fill="#065f46">Entry Point → Pick One Route</text>
            </g>

            {/* --- Applications (bottom) --- */}
            <g>
              <rect x="60" y="660" width="320" height="110" rx="18" fill="#fff7ed" stroke="#fb923c" filter="url(#shadow)" />
              <text x="220" y="695" textAnchor="middle" fontWeight="700" fontSize="14" fill="#7c2d12">Robotics & Control</text>
              
              <rect x="420" y="660" width="320" height="110" rx="18" fill="#fff7ed" stroke="#fb923c" filter="url(#shadow)" />
              <text x="580" y="695" textAnchor="middle" fontWeight="700" fontSize="14" fill="#7c2d12">Event Vision & Audio</text>

              <rect x="780" y="660" width="320" height="110" rx="18" fill="#fff7ed" stroke="#fb923c" filter="url(#shadow)" />
              <text x="940" y="695" textAnchor="middle" fontWeight="700" fontSize="14" fill="#7c2d12">Edge/Embedded AI</text>

              <rect x="1140" y="660" width="200" height="110" rx="18" fill="#fff7ed" stroke="#fb923c" filter="url(#shadow)" />
              <text x="1240" y="695" textAnchor="middle" fontWeight="700" fontSize="14" fill="#7c2d12">Anomaly Detection</text>
            </g>

            {/* Connectors from Neuromorphic to Routes */}
            <path d="M780,205 C820,205 820,205 840,185" stroke="#7c3aed" strokeWidth="2" markerEnd="url(#arrow)" fill="none" />
            <path d="M780,425 C820,425 820,425 840,345" stroke="#7c3aed" strokeWidth="2" markerEnd="url(#arrow)" fill="none" />
            <path d="M780,565 C820,565 820,565 840,505" stroke="#7c3aed" strokeWidth="2" markerEnd="url(#arrow)" fill="none" />

            {/* Connectors from Routes to Entry Point */}
            <path d="M1095,250 C1095,280 1100,580 1100,610" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow)" fill="none" />
            <path d="M1095,410 C1095,500 1100,580 1100,610" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow)" fill="none" />
            <path d="M1095,570 C1095,590 1100,600 1100,610" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow)" fill="none" />

            {/* Connectors from Neuromorphic to Applications */}
            <path d="M620,620 C620,640 620,650 620,660" stroke="#7c3aed" strokeWidth="2" markerEnd="url(#arrow)" fill="none" />
            <path d="M620,620 C620,640 260,650 220,660" stroke="#7c3aed" strokeWidth="2" markerEnd="url(#arrow)" fill="none" />
            <path d="M620,620 C620,640 940,650 940,660" stroke="#7c3aed" strokeWidth="2" markerEnd="url(#arrow)" fill="none" />
            <path d="M620,620 C620,640 1240,650 1240,660" stroke="#7c3aed" strokeWidth="2" markerEnd="url(#arrow)" fill="none" />
          </svg>
        </div>

        {/* 90-Day Entry Plan */}
        <section className="rounded-2xl border p-4 shadow-sm space-y-3">
          <h2 className="text-xl font-bold">90‑Day Entry Plan (pick Route A to start fast)</h2>
          <ol className="list-decimal ml-6 space-y-2 text-sm">
            <li><span className="font-semibold">Week 1–2:</span> Quick brain models primer (integrate‑and‑fire, STDP). Install <span className="font-medium">Norse</span> or <span className="font-medium">SpikingJelly</span>. Re‑implement a tiny SNN on static MNIST.</li>
            <li><span className="font-semibold">Week 3–4:</span> Switch to event data: <span className="font-medium">N‑MNIST</span> or <span className="font-medium">DVS Gestures</span>. Train with surrogate gradients; benchmark latency & energy vs a small CNN.</li>
            <li><span className="font-semibold">Week 5–6:</span> Build an edge demo: USB event camera (or emulator) → SNN → control a microcontroller/robot action.</li>
            <li><span className="font-semibold">Week 7–8:</span> Try <span className="font-medium">ANN→SNN</span> conversion on a tiny CNN; compare accuracy vs native SNN.</li>
            <li><span className="font-semibold">Week 9–10:</span> Explore <span className="font-medium">Lava</span> (Intel’s Loihi stack) in simulation; port your model.</li>
            <li><span className="font-semibold">Week 11–12:</span> Apply to a neuromorphic access programme (Loihi/SpiNNaker/BrainScaleS). Write a 1‑page proposal with your demo + benchmarks.</li>
          </ol>
        </section>

        {/* Practical Tooling & Reading */}
        <section className="rounded-2xl border p-4 shadow-sm space-y-2">
          <h2 className="text-xl font-bold">Practical Tooling</h2>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li><span className="font-medium">Frameworks:</span> Lava, Nengo, Brian2, PyTorch+Norse, SpikingJelly</li>
            <li><span className="font-medium">Datasets:</span> N‑MNIST, DVS Gestures, SHD (spiking Heidelberg digits), TIDIGITS (audio)</li>
            <li><span className="font-medium">Sensors:</span> DVS/event cameras, MEMS mics; optional silicon retina/cochlea boards</li>
            <li><span className="font-medium">Hardware (later):</span> Intel Loihi 2 (via programmes), SpiNNaker, BrainScaleS; for embedded demos, MCU + event stream</li>
          </ul>
          <h2 className="text-xl font-bold mt-4">Reading Primer</h2>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li>Dayan & Abbott — <em>Theoretical Neuroscience</em> (neurons → networks fundamentals)</li>
            <li>Gerstner, Kistler, Naud, Paninski — <em>Neuronal Dynamics</em> (free online)</li>
            <li>Indiveri & Liu — Review articles on neuromorphic circuits</li>
          </ul>
        </section>

        <footer className="text-xs text-gray-500">
          Built for rapid orientation. Adjust as the field evolves.
        </footer>
      </div>
    </div>
  );
}

