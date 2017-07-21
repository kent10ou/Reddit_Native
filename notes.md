# Reddit Native Instructions

Please create a React Native app following these specs. The UI design can be basic.
You can choose to develop for either iOS or Android

- [ ] Use Redux
- [ ] Create a main screen that fetches from Reddit’s API (https://www.reddit.com/.json) and displays the basic content (author, title, thumbnail, up votes, etc) in a list
- [ ] Users should be able to pull to refresh the list
- [ ] Clicking on a specific item should transition to a different screen within the app. This screen's content can simply display the same basic content. Users should be able to go back to the main screen (React Navigation is a good option for this)
- [ ] Create a public Github repo for this project with instructions on how to get the app running and send me the link after you're done

------
## Bonus Points:

- [ ] Store the fetched content locally so that if you relaunch the app, it will display that content first before fetching for new content. I recommend using Redux Persist or AsyncStorage
- [ ] Works for both iOS and Android
- [ ] Share some words about your thought process, design/architectural decisions, challenges you faced, etc