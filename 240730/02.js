function task1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Task 1 Complete");
      }, 1000);
    });
  }
  
  function task2() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Task 2 Complete");
      }, 2000);
    });
  }
  
  function task3() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Task 3 Complete");
      }, 3000);
    });
  }
  
  async function runTasksSequential() {
    console.time("Sequential");
    try {
      const result1 = await task1();
      console.log(result1);
      const result2 = await task2();
      console.log(result2);
      const result3 = await task3();
      console.log(result3);
    } catch (error) {
      console.error("Error:", error);
    }
    console.timeEnd("Sequential");
  
    // 예상되는 대략적인 시간과 그 이유 < 약 6초 >
    // 그 이유는 하나의 result들이 실행될 때마다 await로 task들의 비동기적인 실행을 하기 때문에
    // 각각의 task함수들이 걸리는 실행되길 기다리는 시간들을 모두 더한 값이 모두 실행되는 데 걸리는 시간이라 생각함
  }
  
  async function runTasksParallel() {
    console.time("Parallel");
    try {
      // 병렬로 promise들을 한 번에 처리하는 코드
      const results = await Promise.all([task1(), task2(), task3()]);
      results.forEach((result) => console.log(result));
    } catch (error) {
      console.error("Error:", error);
    }
    console.timeEnd("Parallel");
    // 예상되는 대략적인 시간과 그 이유 < 약 3초 >
    // 이유는 병렬로 한번에 실행이 되기 때문에 모두 실행되기까지 걸리는 시간은
    // 실행되기까지 가장 오래 걸리는 함수라 생각해서 3초
  }
  
  // 함수 호출
  runTasksSequential().then(() => runTasksParallel());