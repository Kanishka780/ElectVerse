export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-100 py-10 px-8 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col gap-2">
          <div className="text-2xl font-bold text-green-700">ElectVerse</div>
          <p className="text-sm text-gray-500 max-w-sm">
            Empowering Indian citizens through AI-driven election education. Aligned with NCERT curriculum and ECI guidelines.
          </p>
        </div>

        <div className="flex flex-wrap gap-10">
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-sm text-gray-800 uppercase tracking-wider">Mission</h3>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>Civic Literacy</li>
              <li>Voting Awareness</li>
              <li>Democratic Values</li>
            </ul>
          </div>
          
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-sm text-gray-800 uppercase tracking-wider">Resources</h3>
            <ul className="text-sm text-gray-500 space-y-2">
              <li className="hover:text-green-600 cursor-pointer">ECI Official Portal</li>
              <li className="hover:text-green-600 cursor-pointer">NCERT Civics Guide</li>
              <li className="hover:text-green-600 cursor-pointer">Voter Helpline</li>
            </ul>
          </div>
        </div>

        <div className="text-center md:text-right">
          <div className="text-xs text-gray-400 mb-2">Built for #BuildwithAI Hackathon</div>
          <div className="flex gap-4 justify-center md:justify-end">
             <span className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded">v1.0 Production</span>
             <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">Google Cloud Hosted</span>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-gray-50 text-center text-[10px] text-gray-300 uppercase tracking-widest">
        © 2026 ElectVerse Platform • Promoting Transparent Democracy
      </div>
    </footer>
  );
}
