export function formatThreadCount(count: number): string {
  const threadCount = count.toString().padStart(2, "0");
  const threadWord = count === 1 ? "Thread" : "Threads";

  return count ? `${threadCount} ${threadWord}` : "No Threads";
}
