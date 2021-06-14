/**
 * @file command.js
 * @description git 命令数据
 */

const locations = ['stash', 'workspace', 'index', 'local', 'remote'];

/**
* @key key git命令
* @key left 命令起始位置
* @key right 命令结束位置
* @key direction 命令方向 status 状态 left 向左 right 向右
*/
const commands = [{
   key: 'stash list',
   left: 'stash',
   right: 'stash',
   direction: 'status'
}, {
   key: 'stash show [<stash>]',
   left: 'stash',
   right: 'stash',
   direction: 'status'
}, {
   key: 'stash drop [<stash>]',
   left: 'stash',
   right: 'stash',
   direction: 'status'
}, {
   key: 'stash clear',
   left: 'stash',
   right: 'stash',
   direction: 'status'
}, {
    key: 'init',
    left: 'workspace',
    right: 'workspace',
    direction: 'status'
}, {
    key: 'config',
    left: 'workspace',
    right: 'workspace',
    direction: 'status'
}, {
    key: 'help',
    left: 'workspace',
    right: 'workspace',
    direction: 'status'
}, {
   key: 'clean',
   left: 'workspace',
   right: 'workspace',
   direction: 'status'
}, {
   key: 'log',
   left: 'local',
   right: 'local',
   direction: 'status'
}, {
   key: 'diff <commit> <commit>',
   left: 'local',
   right: 'local',
   direction: 'status'
}, {
   key: 'branch',
   left: 'local',
   right: 'local',
   direction: 'status'
}, {
   key: 'branch -d <branch>',
   left: 'local',
   right: 'local',
   direction: 'status'
}, {
   key: 'branch -r',
   left: 'remote',
   right: 'remote',
   direction: 'status'
}, {
    key: 'remote -v',
    left: 'remote',
    right: 'remote',
    direction: 'status'
}, {
   key: 'push <remote>:<branch>',
   left: 'remote',
   right: 'remote',
   direction: 'status'
}, {
   key: 'stash save [<msg>]',
   left: 'stash',
   right: 'workspace',
   direction: 'left'
}, {
   key: 'stash apply [<stash>]',
   left: 'stash',
   right: 'workspace',
   direction: 'right'
}, {
   key: 'stash pop',
   left: 'stash',
   right: 'workspace',
   direction: 'right'
}, {
   key: 'stash branch <branch>[<stash>]',
   left: 'stash',
   right: 'local',
   direction: 'right'
}, {
   key: 'status',
   left: 'workspace',
   right: 'index',
   direction: 'status'
}, {
   key: 'diff',
   left: 'workspace',
   right: 'index',
   direction: 'status'
}, {
   key: 'diff <commit or branch>',
   left: 'workspace',
   right: 'index',
   direction: 'status'
}, {
   key: 'add <file... or dir...>',
   left: 'workspace',
   right: 'index',
   direction: 'right'
}, {
   key: 'add -u',
   left: 'workspace',
   right: 'index',
   direction: 'right'
}, {
   key: 'rm <file(s)>',
   left: 'workspace',
   right: 'index',
   direction: 'right'
}, {
   key: 'mv <file(s)>',
   left: 'workspace',
   right: 'index',
   direction: 'right'
},{
   key: 'reset --hard',
   left: 'workspace',
   right: 'local',
   direction: 'left'
}, {
   key: 'checkout <file(s) or dir>',
   left: 'workspace',
   right: 'local',
   direction: 'left'
}, {
   key: 'checkout <branch>',
   left: 'workspace',
   right: 'local',
   direction: 'left'
}, {
   key: 'checkout -b <name of new branch>',
   left: 'workspace',
   right: 'local',
   direction: 'left'
}, {
   key: 'merge <commit or branch>',
   left: 'workspace',
   right: 'local',
   direction: 'left'
}, {
   key: 'rebase <upstream>',
   left: 'workspace',
   right: 'local',
   direction: 'left'
}, {
   key: 'cherry-pick <commit>',
   left: 'workspace',
   right: 'local',
   direction: 'left'
}, {
   key: 'revert <commit>',
   left: 'workspace',
   right: 'local',
   direction: 'left'
}, {
    key: 'commit -a [-m <msg>]',
    left: 'workspace',
    right: 'local',
    direction: 'right'
}, {
   key: 'clone <repo>',
   left: 'workspace',
   right: 'remote',
   direction: 'left'
}, {
   key: 'pull <remote> <refspec>',
   left: 'workspace',
   right: 'remote',
   direction: 'left'
}, {
   key: 'reset --hard <remote>|<branch>',
   left: 'workspace',
   right: 'remote',
   direction: 'left'
}, {
   key: 'diff --cached [<commit>]',
   left: 'index',
   right: 'local',
   direction: 'status'
}, {
   key: 'reset HEAD <file(s)>',
   left: 'index',
   right: 'local',
   direction: 'left'
}, {
   key: 'reset --soft HEAD^',
   left: 'index',
   right: 'local',
   direction: 'left'
}, {
   key: 'commit [-m <msg>] [--amend]',
   left: 'index',
   right: 'local',
   direction: 'right'
}, {
   key: 'branch --track <new> <remote/branch>',
   left: 'local',
   right: 'remote',
   direction: 'left'
}, {
   key: 'fetch <remote> <refspec>',
   left: 'local',
   right: 'remote',
   direction: 'left'
}, {
   key: 'push',
   left: 'local',
   right: 'remote',
   direction: 'right'
}, {
   key: 'push <remote> <branch>',
   left: 'local',
   right: 'remote',
   direction: 'right'
}, {
   key: 'push <remote> <branch>:<branch>',
   left: 'local',
   right: 'remote',
   direction: 'right'
}, {
    key: 'push <remote> :<branch>',
    left: 'local',
    right: 'remote',
    direction: 'right'
}];

const translations = {
    en: {
        locations: [{
            key: 'stash',
            title: 'stash',
            desc: 'A place to hide modifications while you work on something else'
        }, {
            key: 'workspace',
            title: 'workspace',
            desc: 'Local checkout'
        }, {
            key: 'index',
            title: 'index',
            desc: 'Files you want to commit. Before you “commit” (checkin) files, you need to first add them to the index. Also called "current directory cache", "staging area", "cache" or "staged files"'
        }, {
            key: 'local',
            title: 'local repository',
            desc: 'A subdirectory named `.git` that contains all of your necessary repository files — a Git repository skeleton. Typical branches: `master`, `feature-x`, `bugfix-y`'
        }, {
            key: 'remote',
            title: 'upstream repository',
            desc: 'Versions of your project that are hosted on the Internet or network, ensuring all your changes are available for other developers. The default name is `origin`. Typical branches here: `master`, `shared-feature-x`, `release-y`'
        }],
        commands: [{
            key: 'stash list',
            desc: 'List the stashes that you currently have.'
        }, {
            key: 'stash show [<stash>]',
            desc: 'Show the changes recorded in the stash as a diff between the stashed state and its original parent. When no <stash> is given, shows the latest one.'
        }, {
            key: 'stash drop [<stash>]',
            desc: 'Remove a single stashed state from the stash list. When no <stash> is given, it removes the latest one.'
        }, {
            key: 'stash clear',
            desc: 'Remove all the stashed states. Note that those states will then be subject to pruning, and may be impossible to recover.'
        }, {
            key: 'clean',
            desc: 'Cleans the working tree by recursively removing files that are not under version control, starting from the current directory. Use `-n` for a dry run to see what would be deleted. Use `-f` to delete the files.'
        }, {
            key: 'log',
            desc: 'Show recent commits, most recent on top. Options: <br> `--decorate` with branch and tag names on appropriate commits <br> `--stat` with stats (files changed, insertions, and deletions) <br> `--author`  only by a certain author <br> `--after="MMM DD YYYY"` ex. (`Jun 20 2008`) only commits after a certain date <br> `--before="MMM DD YYYY"` only commits that occur before a certain date <br> `--merge` only the commits involved in the current merge conflicts.'
        }, {
            key: 'diff <commit> <commit>',
            desc: 'View the changes between two arbitrary commits.'
        }, {
            key: 'branch',
            desc: 'List all existing branches. Option `-r` causes the remote-tracking branches to be listed, and option `-a` shows both.'
        }, {
            key: 'branch -d <branch>',
            desc: 'Delete an specified branch. Use `-D` to force.'
        }, {
            key: 'branch -r',
            desc: 'List remote branches.'
        }, {
            key: 'push <remote>:<branch>',
            desc: 'Push new (or existing) branch to remote repository.'
        }, {
            key: 'stash save [<msg>]',
            desc: 'Save your local modifications to a new stash, and run `git reset &#8209;&#8209;hard` to revert them. The <msg> part is optional and gives the description along with the stashed state. For quickly making a snapshot, you can omit both `save` and <msg>.'
        }, {
            key: 'stash apply [<stash>]',
            desc: 'Move changes from the specified stash into the workspace. The latest stash is the default.'
        }, {
            key: 'stash pop',
            desc: 'Applies the changes from the last (or specified) stash and then removes the given stash.'
        }, {
            key: 'stash branch <branch>[<stash>]',
            desc: 'Creates and checks out a new branch named <branch> starting from the commit at which the <stash> was originally created, applies the changes recorded in <stash> to the new working tree and index. \rIf that succeeds, and <stash> is a reference of the form stash@{<revision>}, it then drops the <stash>. When no <stash> is given, applies the latest one. \rThis is useful if the branch on which you ran `git stash save` has changed enough that `git stash apply` fails due to conflicts. Since the stash is applied on top of the commit that was `HEAD` at the time `git stash` was run, it restores the originally stashed state with no conflicts.'
        }, {
            key: 'status',
            desc: 'Displays: \r• paths that have differences between the index file and the current `HEAD` commit, \r• paths that have differences between the workspace and the index file, and \r• paths in the workspace that are not tracked by git.'
        }, {
            key: 'diff',
            desc: 'Displays the differences not added to the index.'
        }, {
            key: 'diff <commit or branch>',
            desc: 'View the changes you have in your workspace relative to the named <commit>. You can use `HEAD` to compare it with the latest commit, or a branch name to compare with the tip of a different branch.'
        }, {
            key: 'add <file... or dir...>',
            desc: 'Adds the current content of new or modified files to the index, thus staging that content for inclusion in the next commit. Use `add --interactive` to add the modified contents in the workspace interactively to the index.'
        }, {
            key: 'add -u',
            desc: 'Adds the current content of modified (NOT NEW) files to the index.  This is similar to what `git commit -a` does in preparation for making a commit.'
        }, {
            key: 'rm <file(s)>',
            desc: 'Remove a file from the workspace and the index.'
        }, {
            key: 'mv <file(s)>',
            desc: 'Move file in the workspace and the index.'
        }, {
            key: 'commit -a [-m <msg>]',
            desc: 'Commit all files changed since your last commit, except untracked files (ie. all files that are already listed in the index). Remove files in the index that have been removed from the workspace.'
        }, {
            key: 'reset --hard',
            desc: "Matches the workspace and index to the local tree. WARNING: Any changes to tracked files in the working tree since commit are lost. Use this if merging has resulted in conflicts and you'd like to start over. Pass `ORIG_HEAD` to undo the most recent successful merge and any changes after."
        }, {
            key: 'checkout <file(s) or dir>',
            desc: 'Updates the file or directory in the workspace. Does NOT switch branches.'
        }, {
            key: 'checkout <branch>',
            desc: 'Switches branches by updating the index and workspace to reflect the specified branch, <branch>, and updating `HEAD` to be <branch>.'
        }, {
            key: 'checkout -b <name of new branch>',
            desc: 'Create a branch and switch to it'
        }, {
            key: 'merge <commit or branch>',
            desc: 'Merge changes from <branch name> into current branch.\rUse `&#8209;&#8209;no-commit` to leave  changes uncommitted. Use `--no-ff` to create a merge commit even if the merge resolves as a fast forward.'
        }, {
            key: 'rebase <upstream>',
            desc: 'Reverts all commits since the current branch diverged from <upstream>, and then re-applies them one-by-one on top of changes from the `HEAD` of <upstream>.'
        }, {
            key: 'cherry-pick <commit>',
            desc: 'Integrate changes in the given commit into the current branch.'
        }, {
            key: 'revert <commit>',
            desc: 'Reverse commit specified by <commit> and commit the result. This requires your working tree to be clean (no modifications from the `HEAD` commit).'
        }, {
            key: 'clone <repo>',
            desc: 'Download the repository specified by <repo> and checkout `HEAD` of the master branch.'
        }, {
            key: 'pull <remote> <refspec>',
            desc: 'Incorporates changes from a remote repository into the current branch. In its default mode, `git pull` is shorthand for `git fetch` followed by `git merge FETCH_HEAD`.'
        }, {
            key: 'reset --hard <remote>|<branch>',
            desc: 'Reset local repo and working tree to match a remote branch. Use `reset &#8209;&#8209;hard origin/master` to throw away all commits to the local master branch. Use this to start over on a failed merge.'
        }, {
            key: 'diff --cached [<commit>]',
            desc: 'View the changes you staged vs the latest commit. Can pass a <commit> to see changes relative to it.'
        }, {
            key: 'reset HEAD <file(s)>',
            desc: 'Remove the specified files from the next commit. Resets the index but not the working tree (i.e., the changed files are preserved but not marked for commit) and reports what has not been updated.'
        }, {
            key: 'reset --soft HEAD^',
            desc: 'Undo the last commit, leaving changes in the index.'
        }, {
            key: 'commit [-m <msg>] [--amend]',
            desc: 'Commit current selected files with messages. Use `--amend` to revert last commit with the new commit parameters.'
        }, {
            key: 'branch --track <new> <remote/branch>',
            desc: 'Create a new local branch that tracks a remote branch.'
        }, {
            key: 'fetch <remote> <refspec>',
            desc: 'Download objects and refs from another repository.'
        }, {
            key: 'push',
            desc: 'Update the server with your commits across all branches that are *COMMON* between your local copy and the server. Local branches that were never pushed to the server in the first place are not shared.'
        }, {
            key: 'push <remote> <branch>',
            desc: 'Push new (or existing) branch to remote repository.'
        }, {
            key: 'push <remote> <branch>:<branch>',
            desc: 'Push new branch to remote repository with a different name.'
        }, {
            key: 'push <remote> :<branch>',
            desc: 'Remove a remote branch. Literally "push nothing to this branch".'
        }]
    },
    'zh-cn': {
        locations: [{
            key: 'stash',
            title: '存档区',
            desc: '当你去修改别的东西的时候，隐藏（临时保存）当前的修改'
        }, {
            key: 'workspace',
            title: '工作区',
            desc: '本地检出'
        }, {
            key: 'index',
            title: '暂存区',
            desc: '暂存区保存了一份工作(树)的快照，可作为下次提交的内容'
        }, {
            key: 'local',
            title: '本地库',
            desc: '.git 文件夹保存版本库需要的全部信息(Git 版本库的骨架)，一般包括分支`master`, `feature-x`, `bugfix-y`'
        }, {
            key: 'remote',
            title: '远端库',
            desc: '在网络（局域或因特网）上共享给其他开发者的版本库，一般叫"origin". 一般包括分支`master`, `shared-feature-x`, `release-y`'
        }],
        commands: [{
            key: 'stash list',
            desc: '显示当前你有的所有存档。'
        }, {
            key: 'stash show [<stash>]',
            desc: '显示存档中记录的改动，对比存档生成时的原来状态；不指定<stash>则显示最后一个。'
        }, {
            key: 'stash drop [<stash>]',
            desc: '从存档区中删除单个存档；不指定<stash>则删除最后一个。'
        }, {
            key: 'stash clear',
            desc: '清空存档库。注意相关存档会被清理，此操作不能被恢复。'
        }, {
            key: 'init',
            desc: '创建一个空的 git 仓库或重新初始化一个已存在的仓库。'
        }, {
            key: 'config',
            desc: '设置控制 git 外观和行为的配置变量。使用 `--system` `--global` `--local` 参数来区分改变哪个位置的参数。使用 `--list --show-origin` 参数查看所有的配置以及它们所在的文件。'
        }, {
            key: 'help',
            desc: '显示 git 帮助信息。'
        }, {
            key: 'clean',
            desc: '从当前文件夹开始递归清理不受版本管理的内容。使用 `-n` 参数来查看什么会被删除。使用 `-f` 参数来删除文件。'
        }, {
            key: 'log',
            desc: '显示最近的提交，新的日志在最上边显示。 选项 `--decorate` 显示分支和tag名字到对应的提交； <br> `--stat` 显示状态 (文件修改, 添加, 删除)；<br> `--author`  显示特定作者 <br> `--after="MMM DD YYYY"` 例如 (`Jun 20 2008`) 只显示某个日期之后的提交 <br> `--before="MMM DD YYYY"` 只显示某个日期之前的提交 <br> `--merge` 只与当前合并冲突有关的提交。'
        }, {
            key: 'diff <commit> <commit>',
            desc: '显示两个提交之间的不同。'
        }, {
            key: 'branch',
            desc: '显示所有（本地）存在的分支。选项 `-r` 显示远程追踪分支，选项 `-a` 显示全部。'
        }, {
            key: 'branch -d <branch>',
            desc: '删除某个分支，使用 `—D` 来强制删除。'
        }, {
            key: 'branch -r',
            desc: '列出远程分支。'
        }, {
            key: 'remote -v',
            desc: '列出所有远端版本库。'
        }, {
            key: 'push <remote>:<branch>',
            desc: '向远端版本库推送新的(已存在的)分支'
        }, {
            key: 'stash save [<msg>]',
            desc: '保存当前修改到新的存档库，并且执行 `git reset --hard` 来回滚。 msg 是可选的，用来来描述存档。想快速建立存档，可以省略掉 save 和 msg。'
        }, {
            key: 'stash apply [<stash>]',
            desc: '从某个存档中将改变应用到工作区，默认是最近的存档。'
        }, {
            key: 'stash pop',
            desc: '应用最后一个（或指定的）存档中的改动，然后从存档区丢弃它。'
        }, {
            key: 'stash branch <branch>[<stash>]',
            desc: '新建并检出一个新分支 branch ，分支开始于存档建立时的源提交，应用存档的变化作为新的工作区和暂存区。如果成功并且 stash 是以 stash@{revision} 方式给出的，则从存档区删除它。未给出则使用最后一个存档。这在当前分支运行 `stash save` 导致冲突时很好用，因为存档应用于它生成时的提交一定不会有冲突发生。'
        }, {
            key: 'status',
            desc: '显示状态变化，包括 <br> 1) 暂存区与当前的 HEAD 提交之间（即将提交的）<br> 2) 工作区与暂存区（下次不会提交）<br> 3) 未曾被git追踪 (没有历史记录)。'
        }, {
            key: 'diff',
            desc: '显示未添加到暂存区的不同。'
        }, {
            key: 'diff <commit or branch>',
            desc: '查看工作区与某一提交之间的不同。你也可以使用 HEAD 来对比上一提交，或是用分支名来和分支比较。'
        }, {
            key: 'add <file... or dir...>',
            desc: '添加当前的新内容或是修改的文件到暂存区，作为下次提交的(部分)内容。用`add --interactive` 来交互式操作。'
        }, {
            key: 'add -u',
            desc: '添加当前修改（不包括新文件）到暂存区, 这与 `git commit -a` 准备提交内容的方式一致。'
        }, {
            key: 'rm <file(s)>',
            desc: '从工作区和暂存区删除某个文件。'
        }, {
            key: 'mv <file(s)>',
            desc: '从工作区和暂存区移动文件。'
        }, {
            key: 'commit -a [-m <msg>]',
            desc: '提交上次提交之后的所有修改 <br> 1) 未追踪的除外(即：所有暂存区有记录的文件)； <br> 2) 从暂存区删除已在工作区删除的文件。'
        }, {
            key: 'reset --hard',
            desc: '恢复工作区和暂存区到上次提交的状态. <br> 警告： 所有工作区修改都会被丢弃。使用这条命令来解决合并错误，如果你想从头开始的话传入 ORIG_HEAD 来撤销该次提交以来的所有改动。'
        }, {
            key: 'checkout <file(s) or dir>',
            desc: '更新工作区文件或文件夹，不会切换分支'
        }, {
            key: 'checkout <branch>',
            desc: '切换分支，更改工作区和暂存区为 branch 分支的内容，之后 HEAD 指向 branch 分支。'
        }, {
            key: 'checkout -b <name of new branch>',
            desc: '新建一个分支并且立即切换过去。'
        }, {
            key: 'merge <commit or branch>',
            desc: '从 branch 分支合并到当前分支，使用 `--no-commit` 可以保持在已经合并但未提交状态'
        }, {
            key: 'rebase <upstream>',
            desc: '回滚从当前提交和 upstream 分支分开处开始直到当前提交的所有提交，将这些提交一一应用到 upstream 分支，结果作为 upstream 的新提交。'
        }, {
            key: 'cherry-pick <commit>',
            desc: '把某个提交移动到当前分支来。'
        }, {
            key: 'revert <commit>',
            desc: '回滚 commit 指定的提交，这需要当前工作区是干净的，即相比于 HEAD 提交没有修改。'
        }, {
            key: 'clone <repo>',
            desc: '下载 repo 指定的版本库，并在工作区迁出 master 分支的 HEAD 版本。'
        }, {
            key: 'pull <remote> <refspec>',
            desc: '从远程版本库取得修改到当前分支. 一般来说, `git pull` 相当于 `git fetch` 然后做 `git merge FETCH_HEAD`.'
        }, {
            key: 'reset --hard <remote>|<branch>',
            desc: '重置本地版本库，让它与远程版本一致；用 `reset --hard origin/master` 来丢弃所有的本地改动；用这个来处理失败的合并，直接从远程开始。'
        }, {
            key: 'diff --cached [<commit>]',
            desc: '查看已经暂存的内容和上次提交的区别，也可指定某一提交。'
        }, {
            key: 'reset HEAD <file(s)>',
            desc: '从下次提交中移除指定文件。重置暂存区记录但是不处理工作区(即: 文件改动被保留但不会被提交)，同时报告没有被更新的文件。'
        }, {
            key: 'reset --soft HEAD^',
            desc: '恢复上一次提交，保留暂存区的改动。'
        }, {
            key: 'commit [-m <msg>] [--amend]',
            desc: '提交当前暂存区中的内容， msg 为提交信息，选项 `--amend` 可以覆盖上一个提交。'
        }, {
            key: 'branch --track <new> <remote/branch>',
            desc: '添加一个本地分支来跟踪某个远程分支。'
        }, {
            key: 'fetch <remote> <refspec>',
            desc: '从远端版本库下载对象和引用（即版本信息）'
        }, {
            key: 'push',
            desc: '将所有本地提交的改变推送到远端，仅包括那些本地和远端都存在的分支。'
        }, {
            key: 'push <remote> <branch>',
            desc: '向远端版本库推送新的（已存在的）分支。'
        }, {
            key: 'push <remote> <branch>:<branch>',
            desc: '向远端版本库推送分支，但是从不同的（本地）分支名。'
        }, {
            key: 'push <remote> :<branch>',
            desc: '通过向远程分支推送空内容删除一个远程分支。'
        }]
    }
};

export default {
    locations,
    commands,
    translations
};
