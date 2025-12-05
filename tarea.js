const supabaseClient = supabase.createClient('https://ngkvjytxrgzgzvvaxnpk.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5na3ZqeXR4cmd6Z3p2dmF4bnBrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE5MTYwMDEsImV4cCI6MjA3NzQ5MjAwMX0.dR2v9oZscjcu71VpO56wzSUcMLYXDS8YS_WB0i7pp1E', {
    db:{
        schema: 'public'
    }
});


console.log(supabaseClient)