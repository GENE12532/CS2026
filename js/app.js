/**
 * CS 2026 - Vue 3 Application
 * Handles all interactivity: tabs, carousel, bio toggle, sticky nav, smooth scroll.
 */
const { createApp, ref, reactive, onMounted, onBeforeUnmount, nextTick } = Vue;

const app = createApp({
  setup() {
    /* ---------- Data from data.js ---------- */
    const data = reactive(CS2026_DATA); // 将外部数据文件转换为响应式对象，使数据变化能自动更新UI

    /* ---------- UI State ---------- */
    const activeTab = ref("home"); // 当前激活的标签页ID，默认显示"主页"
    const activeSlide = ref(0); // 轮播图当前显示的图片索引
    const expandedBios = reactive({}); // 存储已展开的个人简历状态，对象格式：{speakerId: true/false}
    const isNavFixed = ref(false); // 导航栏是否固定定位
    const mobileMenuOpen = ref(false); // 移动端菜单是否展开
    const mobileMenuLabel = ref("主页"); // 移动端菜单显示的标签文本
    const isMobileWidth = ref(window.innerWidth < 768); // 判断当前是否为移动端宽度
    const expandedAbstracts = reactive({}); // 存储报告摘要展开状态
    const expandedBioSections = reactive({}); // 存储个人简历章节展开状态
    const expandedAbstractSections = reactive({}); // 存储报告摘要章节展开状态

    let carouselTimer = null; // 轮播图定时器引用
    let navOffsetTop = 0; // 导航栏距离页面顶部的初始偏移量

    /* ---------- Tab Navigation ---------- */
    function switchTab(tabId) {
      activeTab.value = tabId; // 更新当前激活的标签页
      mobileMenuLabel.value =
        data.navigation.find((n) => n.id === tabId)?.label || "主页"; // 更新移动端菜单标签
      if (window.innerWidth < 768) {
        mobileMenuOpen.value = false; // 移动端切换标签后自动关闭菜单
      }
      nextTick(() => {
        // 等待DOM更新后执行滚动
        const tabEl = document.getElementById("tabLocation");
        const navEl = document.getElementById("site-menu");
        if (tabEl && navEl) {
          // 计算滚动位置：标签内容顶部 - 导航栏高度
          const offset =
            tabEl.getBoundingClientRect().top +
            window.scrollY -
            navEl.offsetHeight;
          window.scrollTo({ top: offset, behavior: "smooth" }); // 平滑滚动到标签位置
        }
      });
    }

    function toggleAbstract(speakerId) {
      expandedAbstracts[speakerId] = !expandedAbstracts[speakerId];
    }

    function isAbstractExpanded(speakerId) {
      return !!expandedAbstracts[speakerId];
    }

    /* ---------- Bio Toggle ---------- */
    function toggleBio(speakerId) {
      // 切换指定嘉宾的个人简历展开状态
      const wasExpanded = expandedBios[speakerId];
      expandedBios[speakerId] = !wasExpanded;
      
      // 如果从收起状态变为展开状态，默认展开两个章节
      if (!wasExpanded && expandedBios[speakerId]) {
        expandedBioSections[speakerId] = true;
        expandedAbstractSections[speakerId] = true;
      }
    }

    function isBioExpanded(speakerId) {
      // 检查指定嘉宾的个人简历是否已展开
      return !!expandedBios[speakerId]; // 使用!!确保返回布尔值
    }

    /* ---------- Section Toggle (可折叠章节) ---------- */
    function toggleBioSection(speakerId) {
      // 切换个人简历章节的展开状态
      expandedBioSections[speakerId] = !expandedBioSections[speakerId];
    }

    function toggleAbstractSection(speakerId) {
      // 切换报告摘要章节的展开状态
      expandedAbstractSections[speakerId] = !expandedAbstractSections[speakerId];
    }

    function isBioSectionExpanded(speakerId) {
      // 检查个人简历章节是否已展开，默认返回true（展开）
      return expandedBioSections[speakerId] !== false;
    }

    function isAbstractSectionExpanded(speakerId) {
      // 检查报告摘要章节是否已展开，默认返回true（展开）
      return expandedAbstractSections[speakerId] !== false;
    }

    /* ---------- Carousel ---------- */
    function nextSlide() {
      // 切换到下一张轮播图，使用取模运算实现循环
      activeSlide.value = (activeSlide.value + 1) % data.carouselImages.length;
    }

    function prevSlide() {
      // 切换到上一张轮播图，处理边界情况（当索引为0时跳到最后一张）
      activeSlide.value =
        (activeSlide.value - 1 + data.carouselImages.length) %
        data.carouselImages.length;
    }

    function goToSlide(index) {
      // 直接跳转到指定索引的轮播图
      activeSlide.value = index;
    }

    function startCarousel() {
      // 启动轮播图自动播放
      stopCarousel(); // 先停止现有的定时器
      carouselTimer = setInterval(nextSlide, 5000); // 每5秒切换一次
    }

    function stopCarousel() {
      // 停止轮播图自动播放
      if (carouselTimer) {
        clearInterval(carouselTimer);
        carouselTimer = null;
      }
    }

    /* ---------- Sticky Navigation ---------- */
    function handleScroll() {
      // 处理滚动事件，实现导航栏固定效果
      const navEl = document.getElementById("site-menu");
      if (!navEl) return;
      if (!navOffsetTop) {
        navOffsetTop = navEl.offsetTop; // 首次滚动时记录导航栏初始位置
      }
      const scrollY = window.scrollY;
      if (scrollY >= navOffsetTop) {
        // 当滚动超过导航栏初始位置时，固定导航栏
        isNavFixed.value = true;
        navEl.style.position = "fixed";
        navEl.style.top = "0";
        navEl.style.zIndex = "9999";
        navEl.style.width = "100%";
      } else {
        // 回到顶部时恢复原始定位
        isNavFixed.value = false;
        navEl.style.position = "relative";
        navEl.style.left = "0";
      }
    }

    /* ---------- Resize Handler ---------- */
    function handleResize() {
      // 处理窗口大小变化，更新移动端状态
      isMobileWidth.value = window.innerWidth < 768;
    }

    /* ---------- Mobile Toggle ---------- */
    function toggleMobileMenu() {
      // 切换移动端菜单的展开/收起状态
      mobileMenuOpen.value = !mobileMenuOpen.value;
    }

    /* ---------- Mobile More Menu ---------- */
    function showMoreMenu() {
      // 显示更多菜单（移动端），先滚动到顶部再展开菜单
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => {
        mobileMenuOpen.value = true;
      }, 300); // 延迟300ms确保滚动完成
    }

    /* ---------- Lifecycle ---------- */
    onMounted(() => {
      // 组件挂载后执行
      startCarousel(); // 启动轮播图
      window.addEventListener("scroll", handleScroll); // 监听滚动事件
      window.addEventListener("resize", handleResize); // 监听窗口大小变化
      nextTick(() => {
        // 等待DOM渲染完成后获取导航栏位置
        const navEl = document.getElementById("site-menu");
        if (navEl) navOffsetTop = navEl.offsetTop;
      });
    });

    onBeforeUnmount(() => {
      // 组件卸载前执行清理
      stopCarousel(); // 停止轮播图
      window.removeEventListener("scroll", handleScroll); // 移除事件监听
      window.removeEventListener("resize", handleResize);
    });

    return {
      // 暴露给模板使用的数据和方法
      ...data, // 展开所有数据对象属性
      expandedAbstracts,
      toggleAbstract,
      isAbstractExpanded,
      expandedBioSections,
      expandedAbstractSections,
      activeTab,
      activeSlide,
      expandedBios,
      isNavFixed,
      mobileMenuOpen,
      mobileMenuLabel,
      isMobileWidth,
      switchTab,
      toggleBio,
      isBioExpanded,
      toggleBioSection,
      toggleAbstractSection,
      isBioSectionExpanded,
      isAbstractSectionExpanded,
      nextSlide,
      prevSlide,
      goToSlide,
      startCarousel,
      stopCarousel,
      toggleMobileMenu,
      showMoreMenu,
    };
  },
});

app.mount("#app"); // 将Vue应用挂载到id为"app"的DOM元素上
