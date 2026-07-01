import React, { useState } from 'react';
import { useJsonComparison } from '@hooks/useJsonComparison';
import { useKeyboardShortcuts } from '@hooks/useKeyboardShortcuts';
import { useTheme } from '@hooks/useTheme';
import ErrorBoundary from '@components/ErrorBoundary';
import Header from '@components/layout/Header';
import Sidebar from '@components/layout/Sidebar';
import Footer from '@components/layout/Footer';
import EditorPanel from '@components/editors/EditorPanel';
import ComparisonView from '@components/comparison/ComparisonView';
import Button from '@components/common/Button';
import { beautifyJSON, minifyJSON } from '@utils/jsonFormatting';
import '@styles/globals.css';
import '@styles/animations.css';

function App() {
  const [leftJSON, setLeftJSON] = useState('');
  const [rightJSON, setRightJSON] = useState('');
  const { compare } = useJsonComparison();
  const [comparisonResult, setComparisonResult] = useState(null);
  const { theme } = useTheme();

  const handleCompare = () => {
    const result = compare(leftJSON, rightJSON);
    setComparisonResult(result);
  };

  const handleBeautifyLeft = () => {
    try {
      setLeftJSON(beautifyJSON(leftJSON));
    } catch (error) {
      console.error('Failed to beautify:', error);
    }
  };

  const handleBeautifyRight = () => {
    try {
      setRightJSON(beautifyJSON(rightJSON));
    } catch (error) {
      console.error('Failed to beautify:', error);
    }
  };

  const handleMinifyLeft = () => {
    try {
      setLeftJSON(minifyJSON(leftJSON));
    } catch (error) {
      console.error('Failed to minify:', error);
    }
  };

  const handleMinifyRight = () => {
    try {
      setRightJSON(minifyJSON(rightJSON));
    } catch (error) {
      console.error('Failed to minify:', error);
    }
  };

  const handleSwap = () => {
    const temp = leftJSON;
    setLeftJSON(rightJSON);
    setRightJSON(temp);
  };

  const handleClear = () => {
    setLeftJSON('');
    setRightJSON('');
    setComparisonResult(null);
  };

  useKeyboardShortcuts({
    'ctrl+enter': handleCompare,
    'ctrl+b': handleBeautifyLeft,
    'ctrl+m': handleMinifyLeft,
    'ctrl+l': handleClear,
  });

  return (
    <ErrorBoundary>
      <div className={`flex h-screen flex-col ${theme === 'dark' ? 'dark' : ''}`}>
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <main className="flex-1 overflow-auto bg-gray-50 p-4 dark:bg-gray-950">
            <div className="mx-auto max-w-7xl space-y-4">
              {/* Main Comparison Section */}
              <div className="grid grid-cols-2 gap-4">
                <EditorPanel
                  title="Original JSON"
                  value={leftJSON}
                  onChange={setLeftJSON}
                  onFormat={handleBeautifyLeft}
                  onMinify={handleMinifyLeft}
                />
                <EditorPanel
                  title="Modified JSON"
                  value={rightJSON}
                  onChange={setRightJSON}
                  onFormat={handleBeautifyRight}
                  onMinify={handleMinifyRight}
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <Button onClick={handleCompare}>Compare</Button>
                <Button onClick={handleSwap} variant="secondary">
                  Swap
                </Button>
                <Button onClick={handleClear} variant="destructive">
                  Clear
                </Button>
              </div>

              {/* Comparison Results */}
              {comparisonResult && (
                <div className="mt-6">
                  <ComparisonView diff={comparisonResult} />
                </div>
              )}
            </div>
          </main>
        </div>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
