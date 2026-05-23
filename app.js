const TASKS = [
    {
        id: 't0',
        name: 'Submit lab report — OS',
        project: 'OS',
        accent: 'accent-orange',
        dot: 'dot-green',
        tags: ['lab', 'graded'],
        counter: '[0/2]',
        due: 'Yesterday',
        dueClass: 'due-overdue',
        completed: false,
        overdue: true,
        groups: { today: 'overdue', upcoming: 'overdue', inbox: null, completed: null },
        views: ['today', 'upcoming'],
        projects: ['OS'],
        priority: 'HIGH',
        notes: 'Due before midnight. Upload PDF only.',
        subtasks: { done: 0, total: 2, items: ['Draft sections 1-3', 'Final review & upload'] },
    },
    {
        id: 't1',
        name: 'Finish CS-241 problem set 04',
        project: 'Algorithms',
        accent: 'accent-purple',
        dot: 'dot-purple',
        tags: ['hard', 'graded'],
        counter: '[2/3]',
        due: 'Today • 23:59',
        dueClass: 'due-today',
        completed: false,
        groups: { today: 'today', upcoming: 'today', inbox: null, completed: null },
        views: ['today', 'upcoming'],
        projects: ['Algorithms'],
        priority: 'HIGH',
        notes: 'Office hours moved to 4pm. Submit via Gradescope.',
        subtasks: { done: 2, total: 3, items: ['Dijkstra implementation', 'Write proof for Q5', 'Run test cases & submit'] },
    },
    {
        id: 't2',
        name: 'Read chapter 7 — Distributed Systems',
        project: 'Distributed',
        accent: 'accent-purple',
        dot: 'dot-purple',
        tags: ['reading'],
        due: 'Today · 18:00',
        dueClass: 'due-today',
        completed: false,
        groups: { today: 'today', upcoming: 'today', inbox: null, completed: null },
        views: ['today', 'upcoming'],
        projects: ['Distributed'],
        priority: 'MEDIUM',
        notes: 'Focus on consensus algorithms section.',
        subtasks: { done: 0, total: 0, items: [] },
    },
    {
        id: 't3',
        name: 'Team standup meeting',
        project: 'Capstone',
        accent: 'accent-pink',
        dot: 'dot-pink',
        tags: ['meeting', 'team'],
        due: 'Done',
        dueClass: 'due-done',
        completed: true,
        groups: { today: 'today', upcoming: null, inbox: null, completed: 'done' },
        views: ['today', 'completed'],
        projects: ['Capstone'],
        priority: 'LOW',
        notes: 'Weekly sync with advisor.',
        subtasks: { done: 1, total: 1, items: ['Prepare slides'] },
    },
    {
        id: 't4',
        name: 'Update resume & LinkedIn',
        project: 'Career',
        accent: 'accent-yellow',
        dot: 'dot-yellow',
        tags: ['internship'],
        due: 'Today · 20:00',
        dueClass: 'due-today',
        completed: false,
        groups: { today: 'today', upcoming: 'today', inbox: null, completed: null },
        views: ['today', 'upcoming'],
        projects: ['Career'],
        priority: 'MEDIUM',
        notes: 'Add summer internship experience.',
        subtasks: { done: 1, total: 3, items: ['Update headline', 'Add projects', 'Request recommendations'] },
    },
    {
        id: 't5',
        name: 'Prepare midterm review sheet',
        project: 'Algorithms',
        accent: 'accent-purple',
        dot: 'dot-purple',
        tags: ['hard', 'deadline'],
        counter: '[1/4]',
        due: 'Tomorrow · 12:00',
        dueClass: 'due-upcoming',
        completed: false,
        groups: { today: null, upcoming: 'tomorrow', inbox: null, completed: null },
        views: ['upcoming'],
        projects: ['Algorithms'],
        priority: 'HIGH',
        notes: 'Cover graphs, DP, and greedy.',
        subtasks: { done: 1, total: 4, items: ['Graph algorithms', 'Dynamic programming', 'Greedy proofs', 'Practice problems'] },
    },
    {
        id: 't6',
        name: 'Implement Raft leader election',
        project: 'Distributed',
        accent: 'accent-purple',
        dot: 'dot-purple',
        tags: ['lab', 'hard'],
        due: 'Fri · 23:59',
        dueClass: 'due-upcoming',
        completed: false,
        groups: { today: null, upcoming: 'week', inbox: null, completed: null },
        views: ['upcoming'],
        projects: ['Distributed'],
        priority: 'HIGH',
        notes: 'Pair with Alex for code review.',
        subtasks: { done: 0, total: 3, items: ['Follower state', 'Candidate logic', 'Integration tests'] },
    },
    {
        id: 't7',
        name: 'Schedule dentist appointment',
        project: 'Personal',
        accent: 'accent-blue',
        dot: 'dot-blue',
        tags: ['health'],
        due: 'Sat · 10:00',
        dueClass: 'due-upcoming',
        completed: false,
        groups: { today: null, upcoming: 'week', inbox: null, completed: null },
        views: ['upcoming'],
        projects: ['Personal'],
        priority: 'LOW',
        notes: '',
        subtasks: { done: 0, total: 0, items: [] },
    },
    {
        id: 't8',
        name: 'Pay electricity bill',
        project: 'Personal',
        accent: 'accent-blue',
        dot: 'dot-blue',
        tags: ['bill', 'daily'],
        due: 'No date',
        dueClass: 'due-muted',
        completed: false,
        groups: { today: null, upcoming: null, inbox: 'inbox', completed: null },
        views: ['inbox'],
        projects: ['Personal'],
        priority: 'MEDIUM',
        notes: 'Auto-pay setup recommended.',
        subtasks: { done: 0, total: 0, items: [] },
    },
    {
        id: 't9',
        name: 'Review internship applications',
        project: 'Career',
        accent: 'accent-yellow',
        dot: 'dot-yellow',
        tags: ['internship', 'deadline'],
        due: 'No date',
        dueClass: 'due-muted',
        completed: false,
        groups: { today: null, upcoming: null, inbox: 'inbox', completed: null },
        views: ['inbox'],
        projects: ['Career'],
        priority: 'HIGH',
        notes: 'Check Handshake and company portals.',
        subtasks: { done: 0, total: 0, items: [] },
    },
    {
        id: 't10',
        name: 'Buy groceries for the week',
        project: 'Personal',
        accent: 'accent-blue',
        dot: 'dot-blue',
        tags: ['daily'],
        due: 'No date',
        dueClass: 'due-muted',
        completed: false,
        groups: { today: null, upcoming: null, inbox: 'inbox', completed: null },
        views: ['inbox'],
        projects: ['Personal'],
        priority: 'LOW',
        notes: '',
        subtasks: { done: 0, total: 0, items: [] },
    },
    {
        id: 't11',
        name: 'Capstone milestone 2 presentation',
        project: 'Capstone',
        accent: 'accent-pink',
        dot: 'dot-pink',
        tags: ['graded', 'team'],
        due: 'Mon · 14:00',
        dueClass: 'due-upcoming',
        completed: true,
        groups: { today: null, upcoming: null, inbox: null, completed: 'done' },
        views: ['completed'],
        projects: ['Capstone'],
        priority: 'HIGH',
        notes: 'Slides submitted on Canvas.',
        subtasks: { done: 5, total: 5, items: [] },
    },
    {
        id: 't12',
        name: 'OS homework 3 — paging',
        project: 'OS',
        accent: 'accent-orange',
        dot: 'dot-green',
        tags: ['graded', 'lab'],
        due: 'Wed · 23:59',
        dueClass: 'due-done',
        completed: true,
        groups: { today: null, upcoming: null, inbox: null, completed: 'done' },
        views: ['completed'],
        projects: ['OS'],
        priority: 'MEDIUM',
        notes: 'Score: 95/100',
        subtasks: { done: 4, total: 4, items: [] },
    },
];

const VIEW_META = {
    today: { title: 'TODAY', stats: '4/9 done · 27/35 this week' },
    upcoming: { title: 'UPCOMING', stats: '4/9 done · 27/35 this week' },
    inbox: { title: 'INBOX', stats: '0/3 done · 27/35 this week' },
    completed: { title: 'COMPLETED', stats: '24 archived · 27/35 this week' },
};

const SECTION_DEFS = {
    overdue: { label: 'OVERDUE', headerClass: 'section-overdue' },
    today: { label: 'TODAY · 07 MAY 2026', headerClass: 'section-today' },
    tomorrow: { label: 'TOMORROW · 08 MAY 2026', headerClass: 'section-upcoming' },
    week: { label: 'UPCOMING · THIS WEEK', headerClass: 'section-upcoming' },
    inbox: { label: 'UNSCHEDULED', headerClass: 'section-muted' },
    done: { label: 'RECENTLY COMPLETED', headerClass: 'section-muted' },
};

const PROJECT_DOTS = {
    Algorithms: 'dot-purple',
    Distributed: 'dot-blue',
    OS: 'dot-green',
    Capstone: 'dot-orange',
    Career: 'dot-yellow',
    Personal: 'dot-pink',
};

const PROJECT_ACCENTS = {
    Algorithms: 'accent-purple',
    Distributed: 'accent-blue',
    OS: 'accent-green',
    Capstone: 'accent-orange',
    Career: 'accent-yellow',
    Personal: 'accent-pink',
};

let currentNav = { type: 'project', id: 'Algorithms' };
let selectedTaskId = 't1';

function padCount(n) {
    return `[${String(n).padStart(2, '0')}]`;
}

function nextTaskId() {
    const nums = TASKS.map((t) => parseInt(t.id.replace('t', ''), 10)).filter((n) => !Number.isNaN(n));
    return `t${(nums.length ? Math.max(...nums) : 0) + 1}`;
}

function mapPriority(value) {
    const map = { NONE: 'LOW', LOW: 'LOW', MED: 'MEDIUM', HIGH: 'HIGH' };
    return map[value] || 'MEDIUM';
}

function parseTags(raw) {
    if (!raw?.trim()) return [];
    return raw
        .split(/[,\s]+/)
        .map((t) => t.replace(/^#/, '').trim().toLowerCase())
        .filter(Boolean);
}

function parseDue(dueStr) {
    const original = dueStr.trim() || 'No date';
    const d = original.toLowerCase();

    if (!dueStr.trim() || d === 'no date') {
        return {
            due: 'No date',
            dueClass: 'due-muted',
            views: ['inbox'],
            groups: { today: null, upcoming: null, inbox: 'inbox', completed: null },
            overdue: false,
        };
    }
    if (d.includes('yesterday')) {
        return {
            due: original,
            dueClass: 'due-overdue',
            views: ['today', 'upcoming'],
            groups: { today: 'overdue', upcoming: 'overdue', inbox: null, completed: null },
            overdue: true,
        };
    }
    if (d.includes('today')) {
        return {
            due: original,
            dueClass: 'due-today',
            views: ['today', 'upcoming'],
            groups: { today: 'today', upcoming: 'today', inbox: null, completed: null },
            overdue: false,
        };
    }
    if (d.includes('tomorrow')) {
        return {
            due: original,
            dueClass: 'due-upcoming',
            views: ['upcoming'],
            groups: { today: null, upcoming: 'tomorrow', inbox: null, completed: null },
            overdue: false,
        };
    }
    return {
        due: original,
        dueClass: 'due-upcoming',
        views: ['upcoming'],
        groups: { today: null, upcoming: 'week', inbox: null, completed: null },
        overdue: false,
    };
}

function updateNavCounts() {
    const counts = {
        today: TASKS.filter((t) => t.views.includes('today') && !t.completed).length,
        upcoming: TASKS.filter((t) => t.views.includes('upcoming') && !t.completed).length,
        inbox: TASKS.filter((t) => t.views.includes('inbox') && !t.completed).length,
        completed: TASKS.filter((t) => t.completed).length,
    };

    Object.entries(counts).forEach(([id, count]) => {
        const el = document.querySelector(`.content-views[data-id="${id}"] .nav-count`);
        if (!el) return;
        el.textContent = id === 'completed' ? 142 : count;
    });

    document.querySelectorAll('.content-projects.nav-item').forEach((el) => {
        const id = el.dataset.id;
        const count = TASKS.filter((t) => t.projects.includes(id) && !t.completed).length;
        const countEl = el.querySelector('.nav-count');
        if (countEl) countEl.textContent = count;
    });
}

function createTaskFromForm() {
    const title = document.getElementById('nt-title').value.trim();
    if (!title) {
        document.getElementById('nt-title').focus();
        return false;
    }

    const project = document.getElementById('nt-project').value;
    const notesField = document.getElementById('nt-notes').value.trim();
    const reminderOn = document.getElementById('nt-reminder').checked;
    let notes = notesField;
    if (reminderOn) {
        notes = notes ? `${notes}\n\n⏰ Remind me 1 hour before.` : '⏰ Remind me 1 hour before.';
    }

    const dueInfo = parseDue(document.getElementById('nt-due').value);
    const task = {
        id: nextTaskId(),
        name: title,
        project,
        accent: PROJECT_ACCENTS[project] || 'accent-cyan',
        dot: PROJECT_DOTS[project] || 'dot-cyan',
        tags: parseTags(document.getElementById('nt-tags').value),
        due: dueInfo.due,
        dueClass: dueInfo.dueClass,
        completed: false,
        overdue: dueInfo.overdue,
        groups: dueInfo.groups,
        views: dueInfo.views,
        projects: [project],
        priority: mapPriority(document.getElementById('nt-priority').value),
        notes,
        subtasks: { items: [] },
    };

    TASKS.unshift(task);
    selectedTaskId = task.id;
    updateNavCounts();
    renderMenu();
    updateTaskDetail(task);
    return true;
}

function filterTasks(nav) {
    if (nav.type === 'view') {
        if (nav.id === 'today') {
            return TASKS.filter((t) => t.views.includes('today') && !t.completed);
        }
        if (nav.id === 'upcoming') {
            return TASKS.filter((t) => t.views.includes('upcoming') && !t.completed);
        }
        if (nav.id === 'inbox') {
            return TASKS.filter((t) => t.views.includes('inbox') && !t.completed);
        }
        if (nav.id === 'completed') {
            return TASKS.filter((t) => t.completed);
        }
    }
    if (nav.type === 'project') {
        return TASKS.filter((t) => t.projects.includes(nav.id) && !t.completed);
    }
    if (nav.type === 'tag') {
        return TASKS.filter((t) => t.tags.includes(nav.id) && !t.completed);
    }
    return [];
}

function getSections(nav, tasks) {
    if (nav.type === 'view') {
        if (nav.id === 'today') {
            const order = ['overdue', 'today'];
            return order
                .map((key) => ({
                    key,
                    ...SECTION_DEFS[key],
                    tasks: tasks.filter((t) => t.groups.today === key),
                }))
                .filter((s) => s.tasks.length > 0);
        }
        if (nav.id === 'upcoming') {
            const order = ['overdue', 'today', 'tomorrow', 'week'];
            return order
                .map((key) => ({
                    key,
                    ...SECTION_DEFS[key],
                    tasks: tasks.filter((t) => t.groups.upcoming === key),
                }))
                .filter((s) => s.tasks.length > 0);
        }
        if (nav.id === 'inbox') {
            return [{ key: 'inbox', ...SECTION_DEFS.inbox, tasks }];
        }
        if (nav.id === 'completed') {
            return [{ key: 'done', ...SECTION_DEFS.done, tasks }];
        }
    }

    if (nav.type === 'project' || nav.type === 'tag') {
        const prefix = nav.type === 'project' ? nav.id.toUpperCase() : `#${nav.id.toUpperCase()}`;
        return [
            {
                key: 'filter',
                label: prefix,
                headerClass: 'section-today',
                tasks,
            },
        ];
    }

    return [];
}

function getMenuTitle(nav) {
    if (nav.type === 'view') {
        return VIEW_META[nav.id]?.title || nav.id.toUpperCase();
    }
    if (nav.type === 'project') return nav.id.toUpperCase();
    if (nav.type === 'tag') return `#${nav.id.toUpperCase()}`;
    return '';
}

function getMenuStats(nav, tasks) {
    if (nav.type === 'view' && VIEW_META[nav.id]) {
        return VIEW_META[nav.id].stats;
    }
    const done = tasks.filter((t) => t.completed).length;
    return `${done}/${tasks.length} shown · 27/35 this week`;
}

function renderTags(tags) {
    return tags.map((tag) => `<span class="task-tag">#${tag}</span>`).join('');
}

function getSubtaskItems(task) {
    const st = task.subtasks;
    if (!st?.items?.length) return [];
    if (typeof st.items[0] === 'object' && st.items[0] !== null && 'text' in st.items[0]) {
        return st.items;
    }
    const done = st.done ?? 0;
    return st.items.map((text, i) => ({ text, done: i < done }));
}

function saveSubtaskItems(task, items) {
    task.subtasks = { items };
}

function getSubtaskProgress(task) {
    const items = getSubtaskItems(task);
    return {
        items,
        done: items.filter((i) => i.done).length,
        total: items.length,
    };
}

function renderTaskItem(task) {
    const isActive = task.id === selectedTaskId;
    const checked = task.completed ? 'checked' : '';
    const checkMark = task.completed ? '✓' : '';
    const completedClass = task.completed ? 'completed' : '';
    const { done, total } = getSubtaskProgress(task);
    const counter =
        total > 0 ? `<span class="task-counter">[${done}/${total}]</span>` : '';

    return `
        <div class="task-item ${completedClass} ${isActive ? 'active-task' : ''}" data-task-id="${task.id}">
            <div class="task-checkbox ${checked}">${checkMark}</div>
            <span class="task-accent ${task.accent}"></span>
            <div class="task-body">
                <span class="task-name">${task.name}</span>
                <div class="task-meta">
                    ${counter}
                    ${renderTags(task.tags)}
                    <span class="task-project">
                        <span class="project-dot ${task.dot}"></span>${task.project}
                    </span>
                </div>
            </div>
            <span class="task-due ${task.dueClass}">${task.due}</span>
        </div>
    `;
}

function renderMenu() {
    const tasks = filterTasks(currentNav);
    const sections = getSections(currentNav, tasks);
    const listEl = document.getElementById('task-list');
    const titleEl = document.getElementById('menu-title');
    const statsEl = document.getElementById('menu-stats');

    titleEl.textContent = getMenuTitle(currentNav);
    statsEl.textContent = getMenuStats(currentNav, tasks);

    if (sections.length === 0) {
        listEl.innerHTML = `
            <div class="empty-state">
                <p>No tasks here.</p>
                <span>Use + to add a new task</span>
            </div>
        `;
        return;
    }

    listEl.innerHTML = sections
        .map(
            (section) => `
        <section class="task-section">
            <div class="section-header ${section.headerClass}">
                <span class="section-label">${section.label}</span>
                <span class="section-count">${padCount(section.tasks.length)}</span>
                <span class="section-line"></span>
            </div>
            ${section.tasks.map(renderTaskItem).join('')}
        </section>
    `
        )
        .join('');

    if (!tasks.some((t) => t.id === selectedTaskId) && tasks.length > 0) {
        selectedTaskId = tasks[0].id;
        updateTaskDetail(TASKS.find((t) => t.id === selectedTaskId));
    } else if (tasks.length === 0) {
        selectedTaskId = null;
    }

    listEl.querySelectorAll('.task-item').forEach((el) => {
        el.addEventListener('click', () => {
            selectedTaskId = el.dataset.taskId;
            listEl.querySelectorAll('.task-item').forEach((item) => item.classList.remove('active-task'));
            el.classList.add('active-task');
            const task = TASKS.find((t) => t.id === selectedTaskId);
            if (task) updateTaskDetail(task);
        });
    });
}

function updateTaskDetail(task) {
    if (!task) return;

    document.querySelector('#task .title p').textContent = `TASK / ${task.id.toUpperCase()}`;
    document.querySelector('#detail-title p').textContent = task.name;

    const fields = document.querySelectorAll('#task .task-field');
    const statusVal = fields[0].querySelector('.field-value');
    statusVal.innerHTML = `<span class="badge"></span><span>${task.completed ? 'DONE' : 'ACTIVE'}</span>`;

    const projectVal = fields[1].querySelector('.field-value');
    const dot = PROJECT_DOTS[task.project] || 'dot-cyan';
    projectVal.innerHTML = `<span class="badge ${dot}"></span><span>${task.project}</span>`;

    fields[2].querySelector('.field-value').textContent = task.due;

    const priorityEl = fields[3].querySelector('.field-value');
    priorityEl.textContent =
        task.priority === 'HIGH' ? '!!! HIGH' : task.priority === 'MEDIUM' ? '!! MED' : task.priority === 'LOW' ? '! LOW' : 'NONE';
    priorityEl.className = `field-value ${task.priority === 'HIGH' ? 'priority-high' : ''}`;

    const tagsVal = fields[4].querySelector('.tags-value');
    tagsVal.innerHTML = task.tags
        .map((t) => `<span class="small-tag${t === 'graded' ? ' tag-highlight' : ''}">#${t}</span>`)
        .join('');

    const noteBox = document.querySelector('.note-box p');
    noteBox.textContent = task.notes || 'No notes yet.';

    const subCount = document.querySelector('.subtask-count');
    const subFill = document.querySelector('#subtasks .progress-fill');
    const subList = document.querySelector('.subtask-list');
    const { done, total, items } = getSubtaskProgress(task);
    const subtasksEl = document.getElementById('subtasks');

    if (total > 0) {
        subCount.textContent = `[${done}/${total}]`;
        subFill.style.width = `${Math.round((done / total) * 100)}%`;
        subList.innerHTML = items
            .map(
                (item, i) => `
            <div class="subtask-item ${item.done ? 'completed' : ''}" data-subtask-index="${i}">
                <div class="checkbox">${item.done ? '✓' : ''}</div>
                <p>${item.text}</p>
            </div>
        `
            )
            .join('');
        subtasksEl.style.display = 'flex';
        bindSubtaskEvents();
    } else {
        subCount.textContent = '[0/0]';
        subFill.style.width = '0%';
        subList.innerHTML = '';
        subtasksEl.style.display = 'flex';
    }
}

function toggleSubtask(taskId, index) {
    const task = TASKS.find((t) => t.id === taskId);
    if (!task) return;

    const items = getSubtaskItems(task);
    if (index < 0 || index >= items.length) return;

    items[index].done = !items[index].done;
    saveSubtaskItems(task, items);
    updateTaskDetail(task);
    renderMenu();
}

function bindSubtaskEvents() {
    const subList = document.querySelector('.subtask-list');
    if (!subList) return;

    if (subList._subtaskHandler) {
        subList.removeEventListener('click', subList._subtaskHandler);
    }

    subList._subtaskHandler = (e) => {
        const item = e.target.closest('.subtask-item');
        if (!item || !selectedTaskId) return;
        e.stopPropagation();
        const index = parseInt(item.dataset.subtaskIndex, 10);
        toggleSubtask(selectedTaskId, index);
    };

    subList.addEventListener('click', subList._subtaskHandler);
}

function setActiveNav(nav) {
    currentNav = nav;

    document.querySelectorAll('.left-sidebar .nav-item').forEach((el) => {
        el.classList.remove('active');
    });

    const selector =
        nav.type === 'view'
            ? `.content-views[data-id="${nav.id}"]`
            : nav.type === 'project'
              ? `.content-projects[data-id="${nav.id}"]`
              : `.tag[data-id="${nav.id}"]`;

    const activeEl = document.querySelector(selector);
    if (activeEl) activeEl.classList.add('active');

    renderMenu();
}

function initSidebar() {
    document.querySelector('.left-sidebar').addEventListener('click', (e) => {
        const item = e.target.closest('.nav-item');
        if (!item) return;

        const type = item.dataset.nav;
        const id = item.dataset.id;
        if (!type || !id) return;

        setActiveNav({ type, id });
    });
}

function initViewSwitcher() {
    document.querySelectorAll('.view-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.view-btn').forEach((b) => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
}

function updateBodyModalClass() {
    const taskModal = document.getElementById('new-task-modal');
    const commandModal = document.getElementById('command-palette');
    const anyOpen = !taskModal.hidden || !commandModal.hidden;
    document.body.classList.toggle('modal-open', anyOpen);
}

function openNewTaskModal() {
    closeCommandPalette();
    const modal = document.getElementById('new-task-modal');
    modal.hidden = false;
    modal.setAttribute('aria-hidden', 'false');
    updateBodyModalClass();
    document.getElementById('nt-title').focus();
}

function showNewTaskModal() {
    const modal = document.getElementById('new-task-modal');
    if (!modal.hidden) return;
    resetNewTaskForm();
    openNewTaskModal();
}

function toggleNewTaskModal() {
    const modal = document.getElementById('new-task-modal');
    if (!modal.hidden) {
        closeNewTaskModal();
        return;
    }
    showNewTaskModal();
}

function closeNewTaskModal() {
    const modal = document.getElementById('new-task-modal');
    modal.hidden = true;
    modal.setAttribute('aria-hidden', 'true');
    updateBodyModalClass();
}

const COMMANDS = [
    {
        id: 'add-task',
        label: '+ Add new task',
        keys: ['N'],
        run: () => {
            closeCommandPalette();
            showNewTaskModal();
        },
    },
    {
        id: 'go-today',
        label: 'Go to Today',
        keys: ['G', 'T'],
        run: () => {
            setActiveNav({ type: 'view', id: 'today' });
            closeCommandPalette();
        },
    },
    {
        id: 'go-upcoming',
        label: 'Go to Upcoming',
        keys: ['G', 'U'],
        run: () => {
            setActiveNav({ type: 'view', id: 'upcoming' });
            closeCommandPalette();
        },
    },
    {
        id: 'calendar',
        label: 'Open calendar view',
        keys: ['G', 'C'],
        run: () => {
            document.querySelector('.view-btn[data-view-mode="cal"]')?.click();
            closeCommandPalette();
        },
    },
    {
        id: 'filter-tag',
        label: 'Filter by tag...',
        keys: ['F'],
        run: () => {
            setActiveNav({ type: 'tag', id: 'hard' });
            closeCommandPalette();
        },
    },
    {
        id: 'new-project',
        label: 'New project',
        keys: ['P'],
        run: () => {
            closeCommandPalette();
            document.querySelector('.new-content2')?.focus();
        },
    },
];

let commandActiveIndex = 0;
let filteredCommands = [...COMMANDS];

function renderCommandList() {
    const list = document.getElementById('command-list');
    if (filteredCommands.length === 0) {
        list.innerHTML = '<li class="command-empty">No commands found</li>';
        return;
    }

    if (commandActiveIndex >= filteredCommands.length) {
        commandActiveIndex = 0;
    }

    list.innerHTML = filteredCommands
        .map((cmd, i) => {
            const keysHtml = cmd.keys
                .map((k) => `<span class="command-key">${k}</span>`)
                .join('');
            return `
                <li class="command-item ${i === commandActiveIndex ? 'active' : ''}" data-command-id="${cmd.id}">
                    <span class="command-label">${cmd.label}</span>
                    <span class="command-keys">${keysHtml}</span>
                </li>
            `;
        })
        .join('');

    list.querySelectorAll('.command-item').forEach((el) => {
        el.addEventListener('mouseenter', () => {
            commandActiveIndex = filteredCommands.findIndex((c) => c.id === el.dataset.commandId);
            renderCommandList();
        });
        el.addEventListener('click', () => runCommand(el.dataset.commandId));
    });
}

function filterCommands(query) {
    const q = query.trim().toLowerCase();
    filteredCommands = !q
        ? [...COMMANDS]
        : COMMANDS.filter((cmd) => cmd.label.toLowerCase().includes(q));
    commandActiveIndex = 0;
    renderCommandList();
}

function runCommand(id) {
    const cmd = COMMANDS.find((c) => c.id === id);
    if (cmd) cmd.run();
}

function openCommandPalette() {
    closeNewTaskModal();
    const modal = document.getElementById('command-palette');
    modal.hidden = false;
    modal.setAttribute('aria-hidden', 'false');
    updateBodyModalClass();

    const input = document.getElementById('command-input');
    input.value = '';
    filterCommands('');
    input.focus();
}

function closeCommandPalette() {
    const modal = document.getElementById('command-palette');
    if (modal.hidden) return;
    modal.hidden = true;
    modal.setAttribute('aria-hidden', 'true');
    updateBodyModalClass();
}

function initCommandPalette() {
    const modal = document.getElementById('command-palette');
    const input = document.getElementById('command-input');

    document.getElementById('btn-open-command').addEventListener('click', openCommandPalette);

    modal.querySelectorAll('[data-close-command]').forEach((el) => {
        el.addEventListener('click', closeCommandPalette);
    });

    input.addEventListener('input', () => filterCommands(input.value));

    input.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (filteredCommands.length === 0) return;
            commandActiveIndex = (commandActiveIndex + 1) % filteredCommands.length;
            renderCommandList();
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (filteredCommands.length === 0) return;
            commandActiveIndex = (commandActiveIndex - 1 + filteredCommands.length) % filteredCommands.length;
            renderCommandList();
        } else if (e.key === 'Enter' && filteredCommands.length > 0) {
            e.preventDefault();
            runCommand(filteredCommands[commandActiveIndex].id);
        } else if (e.key === 'Escape') {
            e.preventDefault();
            closeCommandPalette();
        }
    });

    document.addEventListener('keydown', (e) => {
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            if (!modal.hidden) {
                closeCommandPalette();
            } else {
                openCommandPalette();
            }
            return;
        }

        if (!modal.hidden) return;

        if (e.key === 'Escape' && !document.getElementById('new-task-modal').hidden) {
            closeNewTaskModal();
        }
    });
}

function resetNewTaskForm() {
    const form = document.getElementById('new-task-form');
    form.reset();
    document.getElementById('nt-due').value = 'Today · 18:00';
    document.getElementById('nt-priority').value = 'MED';
    document.querySelectorAll('.priority-btn').forEach((btn) => {
        btn.classList.toggle('active', btn.dataset.priority === 'MED');
    });
    updateProjectDot();
}

function updateProjectDot() {
    const select = document.getElementById('nt-project');
    const dot = document.getElementById('nt-project-dot');
    const option = select.selectedOptions[0];
    const dotClass = option?.dataset.dot || 'dot-cyan';
    dot.className = `select-dot ${dotClass}`;
}

function initNewTaskModal() {
    const modal = document.getElementById('new-task-modal');
    const form = document.getElementById('new-task-form');

    document.getElementById('btn-open-new-task').addEventListener('click', toggleNewTaskModal);

    const quickAddBar = document.getElementById('task-input-bar');
    quickAddBar.addEventListener('click', showNewTaskModal);
    quickAddBar.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            showNewTaskModal();
        }
    });

    modal.querySelectorAll('[data-close-modal]').forEach((el) => {
        el.addEventListener('click', closeNewTaskModal);
    });

    document.getElementById('nt-project').addEventListener('change', updateProjectDot);

    document.querySelectorAll('.priority-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.priority-btn').forEach((b) => b.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById('nt-priority').value = btn.dataset.priority;
        });
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (createTaskFromForm()) {
            closeNewTaskModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        const commandOpen = !document.getElementById('command-palette').hidden;
        if (commandOpen) return;

        if (e.key === 'Escape' && !modal.hidden) {
            closeNewTaskModal();
            return;
        }
        if (modal.hidden && (e.key === 'n' || e.key === 'N') && !e.ctrlKey && !e.metaKey && !e.altKey) {
            const tag = e.target.tagName;
            if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
            e.preventDefault();
            showNewTaskModal();
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initSidebar();
    initViewSwitcher();
    initNewTaskModal();
    initCommandPalette();
    updateNavCounts();
    renderMenu();
    updateTaskDetail(TASKS.find((t) => t.id === selectedTaskId));
    bindSubtaskEvents();
});
