module.exports =  dashboard = {
    dashboardPage : async (req, res) => {
         res.render('admin/index', {
              layout : './layouts/dashboard_layout',
         })
    }
}