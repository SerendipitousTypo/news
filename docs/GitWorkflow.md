##Overview of the agreed rebase style workflow

###Initial set up
- [ ] fork the master repo
- [ ] clone to your local machine
- [ ] set up upstream to master repo  - https://github.com/SerendipitousTypo/news.git
- [ ] cut a new branch for anything you plan to work on. Use prefixes on your feature 
    * docs- for updating documents
    * bugs- for fixing bugs
    * feat- for feature
 
####NOTE: Only work on branches locally do not work on your local master branch.

###Daily work flow
- [ ] pull upstream master to your local master - USE git pull --rebase upstream master
- [ ] locally merge any conflicts or discuss with the team why there is a conflict
- [ ] checkout your working branch and pull upstream master to that branch - USE: git pull --rebase upstream master 
- [ ] locally merge any conflicts or discusss with the team why there is a conflict.
- [ ] work on your local branch with LOTS of commits
- [ ] when you have something ready, push to your origin with git push origin --rebase  
- [ ] make a pull request 
- [ ] Code review at or around next standup and we will decide if the pull request gets merged at that time.
