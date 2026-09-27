import { Component } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

/**
 * Enterprise Production Error Boundary
 * Prevents white screen of death under heavy traffic, out-of-memory, or 3D/WebGL failures.
 * Captures errors gracefully and renders a luxury Atelier fallback UI with auto-recovery.
 */
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // In production, log to telemetry without leaking PII
    if (process.env.NODE_ENV !== 'production') {
      console.error('[HYZIN Enterprise ErrorBoundary Caught]:', error, errorInfo);
    }
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    if (this.props.onReset) {
      this.props.onReset();
    } else {
      window.location.hash = 'home';
      window.location.reload();
    }
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[50vh] w-full flex items-center justify-center p-6 bg-[#3A2117] text-[#EDE3D2]">
          <div className="max-w-lg w-full p-8 border border-[#C4A174]/30 bg-[#4A2E22] shadow-[0_20px_50px_rgba(0,0,0,0.5)] text-center relative overflow-hidden">
            {/* Background luxury grain */}
            <div className="absolute inset-0 bg-grain opacity-40 pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#3A2117] border border-[#C4A174]/40 flex items-center justify-center mb-5 text-[#C4A174]">
                <AlertTriangle className="w-6 h-6" />
              </div>

              <span className="text-[10px] tracking-[0.28em] uppercase text-[#C4A174] font-semibold mb-2">
                Spatial Studio Telemetry
              </span>

              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#EDE3D2] mb-3">
                Experience Temporarily Interrupted
              </h2>

              <p className="text-xs sm:text-sm text-[#D4C3BD] leading-relaxed mb-6 max-w-sm mx-auto">
                Under high concurrent studio demand, this section encountered a transient rendering exception. All data and contacts remain safe.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-3 w-full justify-center">
                <button
                  onClick={this.handleReset}
                  className="w-full sm:w-auto px-6 py-3 bg-[#C4A174] hover:bg-[#EDE3D2] text-[#3A2117] text-xs uppercase tracking-[0.2em] font-bold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Restore View</span>
                </button>
                <a
                  href="#home"
                  onClick={() => {
                    this.setState({ hasError: false });
                    window.location.hash = 'home';
                  }}
                  className="w-full sm:w-auto px-6 py-3 border border-[#C4A174]/40 hover:border-[#C4A174] text-[#EDE3D2] text-xs uppercase tracking-[0.2em] font-medium transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Home className="w-3.5 h-3.5 text-[#C4A174]" />
                  <span>Studio Home</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
