        function throttled(func, wait) {
            var previous = 0;
            var timeout = null;
            return function () {
                var now = new Date().getTime();
                const remain = wait - ( now - previous);
                if (now - previous > wait) {
                    func();
                    previous = now;
                } else if (!time) {
                    time = setTimeout(() => {
                        func();
                        time = null;
                        //时间戳只用于头事件， 之后中间的事件触发(时间戳和定时器是相互竞争的)， 为了不让 时间戳触发事件，更新previous
                        previous = new Date().getTime();
                    }, remain);
                }
            }
        }
